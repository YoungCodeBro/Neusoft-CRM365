<template>
  <div id="ordered">
    <h2 v-if="getFoodsFromLocal()==true"  @click="clearOrdered">{{head}}</h2>
    <van-row>
      <div>
        <van-col span="24" v-for="(index,item) in foods" :key="item">
          <van-badge :content="0" >
            <div class="col-item">
              <img :src="require('../../assets/kfcfood/'+allFood[item].picture)"  @click="toDetail(allFood[item])" alt="">
              <div class="item-attr">
                <span class="name"  @click="toDetail(allFood[item].name)">{{allFood[item].name}}</span>
                  <span class="rank">{{allFood[item].count}}次</span>
                <div>
                <span class="symbol">￥</span>
                  <span class="price-num">{{allFood[item].price}}</span>
                </div>
                <div class="icon">
                  <van-icon name="add" size="2rem" color="darkgray" @click="addFoodToCart(allFood[item])"/>
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
      allFood:{},
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
      console.log(foods)
      if(foods==null){
        this.head = '您还未点过菜哦，试试吧';
      }else{
        this.foods =foods;
        this.allFood=foods;
      }
      return true;
    },
    addFoodToCart(item){
      console.log('加入'+item.name+'到购物车');
      console.log(item);
      let msg = local.addFoodToCart(item,1);
      console.log(msg);
      Notify({message:'加入成功！',type: 'success',duration: 500});
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
      Notify({message:'清除成功！',type: 'success',duration: 500});

      location.reload ();

    }
  },
  components:{
    'nav-button':NavButton,
  },mounted () {
    this.getFoodsFromLocal();
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
  height: 100%;
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
      font:normal bold 1rem arial,sans-serif;
    }
    .rank{
      font:normal bold 1rem arial,sans-serif;
      color: darkgray;
      width: 3rem;
      height: 3rem;
      line-height: 2rem;
    }
    .sel{
      font:normal bold 0.5rem arial,sans-serif;
      color: darkgray;
    }
    .price-num{
      color: red;
      font: normal bold 1.5rem Arial,sans-serif;
    }
    .symbol{
      color: red;
      font: 1rem bold normal Arial,sans-serif;
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
