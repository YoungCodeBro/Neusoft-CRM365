<template>
  <div id="app">
    <div style="position: relative">
      <!--购物车信息部分-->
      <div class="a-info">
        <h2>购物车</h2>
        <div class="in-number">
          <div class="number-left">
            <p style="color: red">用餐人数:{{ mealcount }}人</p>
            <p class="ClassP">备注:无</p>
          </div>
          <div class="number-right" @click="clickT">
            <img src="../../assets/Image/edit.png" alt="" />
            <p>修改</p>
          </div>
        </div>
        <div style="position: relative; height: 50px">
          <p class="in-num-price">购物车总共有6个菜</p>
          <p class="price">
            合计:<span style="color: red; font-size: 25px"
              >￥:{{ sum }}</span
            >
          </p>
        </div>
      </div>
      <div class="MC"></div>
      <!--订单详情--->
      <div class="a-list">
        <ul>
          <li v-for="(item, index) in list" :key="index" class="list-item">
            <div>
              <img :src="require('../../assets/Image/'+item.picture)" alt="" />
            </div>
            <div class="list-item-text">
              <h4>{{ item.name }}</h4>
              <p>$:{{ item.price }}</p>
            </div>
            <div class="list-button">
              <v-stepper :value="item.count" @change="changenum(item, $event)"></v-stepper>
            </div>
          </li>
        </ul>
      </div>

      <!--推荐-->
      <div class="MC"></div>
      <div class="a-food">
        <div class="h3div"><h3>本店最常点的菜</h3></div>
        <div style="height: 10px"></div>
        <ul class="ulONE">
          <li v-for="(item, index) in list" :key="index">
            <div class="divOne">
              <img :src="require('../../assets/Image/'+item.picture)" alt="" />
              <p>{{ item.name }}</p>
              <p>$:{{ item.price }}</p>
            </div>
          </li>
        </ul>
      </div>

      <v-orderButton></v-orderButton>
      <v-Corder></v-Corder>
      <v-NavButton></v-NavButton>
    </div>
  </div>
</template>

<script>
import Stepper from "../Detail Info/Stepper.vue";
import orderButton from "../ShoppingCar/orderButton.vue";
import NavButton from "../nav/NavButton.vue";
import Corder from "../ShoppingCar/Corder.vue";
import { session } from "../../storage";
import { local } from "../../storage";
export default {
  name: "App",
  data() {
    return {
      num: 1,
      mealcount: 0,
      //保存购物车对像
      list: {},
    };
  },
  computed: {
    //购物车总价钱
    sum() {
      let a = 0;
        for(let i in this.list){
          a += (this.list[i].price * this.list[i].count);
        }
        return a;
    }
  },
  //调用js里的对象方法夺取用餐人数以及购物车对象
  mounted() {
    this.mealcount = session.mealnum;
    this.list = local.getCart();
  },
  components: {
    "v-stepper": Stepper,
    "v-orderButton": orderButton,
    "v-NavButton": NavButton,
    "v-Corder": Corder,
  },
  methods: {
    clickT() {
      this.$router.push("/");
    },
  //保存在本地
    changenum(item, num) {
      this.list[item.name].count = num;
      local.modifyCartFoodCount(item);
    }
  },
};
</script>

<style lang="css" scoped>
* {
  margin: 0;
  padding: 0;
  list-style: none;
}
#app {
  padding: 0.4rem auto;

  line-height: 1.5rem;
  font-family: "宋体";
  color: #555;
  background-color: #f7f7f7;
}
.a-info {
  background: #fff;
  border-radius: 0.5rem;
  padding: 0.7rem;
}
.a-info h2 {
  text-align: center;
  font-size: 1.5rem;
  padding: 0.8rem 0px;
  border-bottom: 3px solid #eee;
}
.in-number {
  display: flex;
  padding: 0.5rem 0;
  height: 5rem;
  border-bottom: 3px solid #eee;
}
.number-left {
  position: relative;
  flex: 1;
  padding: 1rem 0;
  font-size: 1.2rem;
  font-weight: 600;
}
.ClassP {
  position: absolute;
  bottom: 0.4rem;
}
.number-left p {
  line-height: 2rem;
}
.number-right {
  position: relative;
  width: 6rem;
  height: 6rem;
  text-align: center;
}
.number-right p {
  position: absolute;
  right: 2.2rem;
  bottom: 1rem;
  font-size: 1rem;
}
.in-num-price {
  font-size: 1.2rem;
}
.price {
  position: absolute;
  top: 2rem;
}

.MC {
  width: 100%;
  height: 0.7rem;
}
/*订单详情 */

.list-item {
  position: relative;
  display: flex;
  width: 100%;
  height: 4rem;
  border-bottom: 0.3rem solid #eee;
  padding: 1rem 0px;
  justify-content: center;
  align-items: center;
}
.list-item img {
  padding: 5px;
  width: 4rem;
  height: 4rem;
  border-radius: 0.8rem;
  margin-right: 1rem;
}
.list-item-text {
  width: 6.7rem;
  padding-top: 1rem;
  font-size: 1.1rem;
  font-weight: 400;

  padding-bottom: 1.5em;
}
.list-button div p {
  padding-top: 0.7em;
  width: 2em;
  text-align: center;
}
.libu {
  display: block;
  width: 2.1rem;
  height: 2.4rem;
  font-size: 1em;
  font-weight: 600;
  background: #fff;
  border: 0px;
  color: red;
  background: grey;
}
/*推荐菜*/
.a-food {
  width: 92%;
}
.ulONE {
  top: 2.3rem;
  display: flex;
  justify-content: space-around;
}
.divOne img {
  width: 6.5rem;
  height: 6.5rem;
  border-radius: 0.5rem;
}
.divOne p {
  text-align: center;
}
.h3div {
  font-size: 0.85rem;
  padding-left: 0.5rem;
}
.ButtonC {
  position: absolute;
  right: 2rem;
}
</style>
