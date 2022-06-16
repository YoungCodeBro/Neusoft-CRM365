<template>
  <div id="app">
    <!--头部-->
    <div class="a-header">
      <div class="a-header0ne">
        <img src="../../assets/Image/timer.png" />
      </div>
      <div class="a-headertwo">
        <p class="P-text1">118号桌待门店接单</p>
        <p class="P-text2">请及时联系服务员确认一点菜信息</p>
      </div>
      <p style="position: absolute; top: 75px">
        已点菜品3份,合计:<span style="color: red; font-size: 25px"
          >{{ sum }}元</span
        >
      </p>
    </div>
    <!--中间灰的部分-->
    <div class="Mdiv"></div>
    <!--主要内容-->
    <div class="a-text">
      <div id="DetailDiv"><h3>菜品详情:</h3></div>
      <div>
        <ul>
          <li v-for="item in listCart" :key="item">
            <div class="textDiv">
              <div class="textDivSmallOne">{{ item.name }}</div>
              <div class="textDivSmallTwo">{{ item.count }}份</div>
              <div class="textDivSmallThree">{{ item.price }}元</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <v-NavButton></v-NavButton>
    <!-- <v-CorderR></v-CorderR> -->
    <v-button
      :text="'继续点菜'"
      :icon="require('../../assets/Image/book.png')"
    ></v-button>
  </div>
</template>

<script>
import CorderR from "../ShoppingCar/CorderR.vue";
import NavButton from "../nav/NavButton.vue";
import Button from "../nav/Button.vue";
import { local } from "../../storage";
export default {
  name: "App",
  components: {
    "v-NavButton": NavButton,
    "v-CorderR": CorderR,
    "v-button": Button,
  },
  data() {
    return {
      listCart: {},
      sumMoney: 12,
      MoneyOne: 12,
      list: [
        { name: "烧茄子", num: 1, Money: 12 },
        { name: "牛肉串", num: 1, Money: 12 },
        { name: "手撕菜", num: 1, Money: 12 },
      ],
    };
  },
  computed: {
    //购物车总价钱
    sum() {
      let a = 0;
      for (let i in this.listCart) {
        a += this.listCart[i].price * this.listCart[i].count;
      }
      return a;
    },
  },
  mounted() {
    this.listCart = local.getCart();
  },
};
</script>

<style lang="css" scoped>
* {
  margin: 0;
  padding: 0;
  list-style: none;
}
body {
  border-color: #f7f7f7;
}
#app {
  padding: 0.1px;
  font-size: 18px;
  line-height: 1.8;
  font-family: "宋体";

  background: #f7f7f7;
}
.a-header {
  border-radius: 0.5rem;
  display: flex;
  position: relative;
  width: 100%;
  height: 8rem;
}
.a-headerOne {
  position: absolute;
  left: 2rem;
}
.a-header0ne img {
  position: absolute;
  top: 0.8rem;
  left: 1.3rem;
}
.a-headertwo {
  flex: 1;
  position: absolute;
  right: 70px;
  top: 10px;
}
.P-text1 {
  font-size: 22px;
  color: rgb(0, 0, 0);
}
.P-text2 {
  font-size: 15px;
  color: grey;
}
.Mdiv {
  width: 100%;
  height: 20px;
  background: rgb(240, 240, 240);
}
#DetailDiv {
  border-bottom: 2px solid #eee;
  font-family: "宋体";
  font-size: 1rem;
  font-weight: 500;
  height: 2rem;
  padding-left: 0.5rem;
}
.textDiv {
  display: flex;
  height: 4rem;
  justify-content: space-around;
  align-items: center;
}
.textDivSmallOne {
  width: 30%;
  text-align: center;
}
.textDivSmallTwo {
  width: 30%;
  text-align: center;
}
.textDivSmallThree {
  width: 30%;
  text-align: center;
}
.btn {
  position: absolute;
  bottom: 0.6rem;
  right: 0.8rem;
}
</style>>

