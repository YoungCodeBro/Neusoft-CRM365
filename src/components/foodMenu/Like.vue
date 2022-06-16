<template>
  <div id="like">
    <h2>{{header}}</h2>
    <van-row>
      <div v-for="foods in menu">
        <van-col span="24" v-for="(item,index) in foods.menuList" :key="index" v-if="isShow()">
          <van-badge :content="0" >
            <div class="col-item">
              <img :src="require('../../assets/kfcfood/'+item.imageUrl)"  @click="toDetail({name:item.nameCn,picture:item.imageUrl,price:item.price/100,count:1,detail:item.descCn})" alt="图片">
              <div class="item-attr">
                <span class="name"  @click="toDetail({name:item.nameCn,picture:item.imageUrl,price:item.price/100,count:1,detail:item.descCn})">{{item.nameCn}}</span>
                <div class="myBox">
                  <span class="symbol">￥</span>
                  <span class="price-num">{{item.price/100}}</span>
                </div>
                <div class="icon">
                  <van-icon style="float: right" name="add" size="2rem" color="darkgray" @click="addFoodToCart({name:item.nameCn,price:item.price/100,detail:item.descCn,img:item.imageUrl})"/>
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
import {local} from '../../storage'
import {Notify} from 'vant'

export default {
  name: 'Main',
  data(){
    return{
      header:'猜你喜欢',
      foods:[],
      menu:{},
    }
  },
  methods:{
    isShow(){
      return Math.random() > 0.5;
    },
    buy(name){
      console.log('您购买了'+name);
    },
    addFoodToCart(item){
      console.log('加入'+item.name+'到购物车');
      console.log(item);
      let msg = local.addFoodToCart(item,1);
      console.log(msg);
      Notify('加入成功！');
    },
    toDetail(item){
      let objStr = JSON.stringify(item);
      this.$router.push({
        name:'Detail',
        params:{
          'item':objStr,
        }
      });
    },
    requestData(){
      let api="http://localhost:3003/data";
      this.$http.jsonp(api).then(function (response) {
        this.menu=response.data.data;
        console.log(this.menu);
      },function (err){
        console.log(err);
      })
    },
  },
  components:{
    'nav-button':NavButton,
  },
  mounted () {
    this.requestData();
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
#like{
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
    padding: 1rem 1rem 1rem;
    .name{
      font:normal bold 1rem arial,sans-serif;
    }
    .rank{
      font:normal bold 0.5rem arial,sans-serif;
      color: darkorange;
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

    }
    .icon{
    }
    .myBox{
      width: 150%;
    }

  }
}
#like /deep/.van-badge{
  opacity: 0;
}

</style>
