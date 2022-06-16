<template>
  <div id="ordered">
    <div v-show="isHaveItem">
      <h2 @click="clearOrdered">{{head}}</h2>
      <van-row>
      <div>
        <van-col span="24" v-for="item in attr" :key="item">
          <van-badge :content="0" >
            <div class="col-item">
              <img :src="require('../../assets/kfcfood/'+(foods[item].picture))"  @click="toDetail(foods[item].name,foods[item].picture,foods[item].price,[item].count,foods[item].detail)" alt="pic">
              <div class="item-attr">
                <span class="name" >{{foods[item].name}}</span>
                  <span class="rank">{{foods[item].count}}次</span>
                <div>
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
    <div v-show="!isHaveItem" class="noItem">
      <p>您还未点过菜哦</p>
      <p>赶快试试吧</p>
      <van-loading type="spinner" color="#1989fa" size="10rem" style="margin-top: 8rem"/>
    </div>
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
      attr:[],
      isHaveItem:true,
    }
  },
  methods:{
    toDetail(name,img,price,count,detail){
      let item = {};
      item.name = name;
      item.price = price;
      item.img = img;
      item.count = count;
      item.status = 0;
      item.detail = detail;
      let objStr = JSON.stringify(item);
      console.log(objStr);
      this.$router.push({
        name:'Detail',
        params:{
          'item':objStr,
        }
      });
    },
    getFoodsFromLocal(){
      let itemList = local.getTotalItem('ordered');

      if(itemList==null){
        this.head = '您还未点过菜哦，赶快试试吧';
        this.isHaveItem = false;
      }else{
        this.attr = Object.keys(itemList);
        console.log(this.attr)
        console.log(itemList)
        this.foods =itemList;
      }
    },
    addFoodToCart(item){
      item.img = item.picture;
      console.log("--------------------")
      console.log(item)
      let msg = local.addFoodToCart(item,1);
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
  },created () {
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
.noItem{
  text-align: center;
  height: 100vh;
  p{
    font:normal bold 1.8rem arial,sans-serif;
    padding-top: 2rem;
  }
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
