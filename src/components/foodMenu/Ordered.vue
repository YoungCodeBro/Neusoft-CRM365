<template>
  <div id="ordered">
    <h2 v-if="getFoodsFromLocal()"  @click="clearOrdered">{{head}}</h2>
    <van-row>
      <div>
        <van-col span="24" v-for="(item,index) in foods" :key="index">
          <van-badge :content="0" >
            <div class="col-item">
              <img :src="require('../../assets/kfcfood/'+foods[item].picture)"  @click="toDetail(foods[item])" alt="">
              <div class="item-attr">
                <span class="name"  @click="toDetail(foods[item].name)">{{foods[item].name}}</span>
                <div>
                  <span class="rank">{{foods[item].count}}次</span>
                  <span class="symbol">￥</span>
                  <span class="price-num">{{foods[item].price}}</span>
                </div>
                <div class="icon">
                  <van-icon name="add" size="2rem" color="darkgray" @click="addFoodToCart(foods[item])"/>
                </div>
              </div>
            </div>
          </van-badge>
        </van-col>
      </div>
    </van-row>
    <nav-button></nav-button>
  </div>
</template>

<script>
import NavButton from '../nav/NavButton'
import {local} from "../../storage"
import { Notify } from 'vant'
export default {
  name: 'Main',
  data(){
    return{
      head:'您点过的菜',
      foods:{},
    }
  },
  methods:{
    toDetail(item){
      let objStr = JSON.stringify(item);
      this.$router.push({
        name:'Detail',
        params:{
          'item':objStr,
        }
      });
    },
    getFoodsFromLocal(){
      let foods = local.getTotalItem('ordered')
      if(foods.length>0){
        this.foods =foods;
      }else{
        this.head = '您还未点过菜哦，试试吧';
        console.log('本地未保存数据');
      }
      return true;
    },
    addFoodToCart(item){
      console.log('加入'+item.name+'到购物车');
      console.log(item);
      let msg = local.addFoodToCart(item,1);
      console.log(msg);
      this.notify('加入成功！');
    },
    clearCart () {
      let msg = local.clearCart();
      console.log(msg);
    },
    notify(msg){
      Notify({ type: 'success', message: msg , duration:500});
    },
    clearOrdered(){
      local.clearItem('ordered');
    }
  },
  components:{
    'nav-button':NavButton,
  }

}
</script>


<style lang="less" scoped>
*{
  margin: 0;
  padding: 0;
}
h2{
  text-align: center;
  font-size: 1rem;
}
#ordered{
  background-color: #f0f0f0;
  height: 100vh;
}
.van-col{
}
.van-col{
  padding: 1rem;
  display: flex;
  justify-content: center;
  .col-item{
    display: flex;
    flex:1;
    background-color: #f7f8f8;
    border-radius: 10px;
    text-align: center;
    height:10rem;
    width: 20rem
  }
  img{
    flex: 1;
    border-bottom-left-radius: 0.5rem;
    border-top-left-radius: 0.5rem;
  }
  .item-attr{
    flex: 1;
    display: flex;
    flex-direction: column;
    text-align: left;
    justify-content: space-around;
    /* 上右下左 /上右下*/
    padding: 1rem 1rem 1rem;
    .name{
      font:normal bold 1.2rem arial,sans-serif;
    }
    .rank{
      font:normal bold 1rem arial,sans-serif;
      color: darkgray;
      width: 2rem;
      height: 3rem;
      line-height: 2rem;
      text-align: center;
    }
    .sel{
      font:normal bold 0.5rem arial,sans-serif;
      color: darkgray;
    }
    .price-num{
      color: red;
      font: normal bold 2rem Arial,sans-serif;
    }
    .symbol{
      color: red;
      font: 1rem bold normal Arial,sans-serif;
      margin-left: 1rem;
    }
    .icon{
      display: flex;
      justify-content: end;
      margin-bottom: 0.18rem;
    }
  }
}
#ordered /deep/.van-badge{
  opacity: 0;
}

</style>
