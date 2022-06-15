<template>
  <div id="hotFood">
    <div v-for="title in headList">
      <h2 :id="title" >{{title}}</h2>
      <van-row>
        <div>
          <van-col span="24" v-for="(item,index) in sortSel()" :key="index"  @click="buy(item.name)">
            <van-badge :content="0" >
              <div class="col-item">
                <img :src="require('../../assets/Image/'+item.img)" alt="">
                <div class="item-attr">
                  <span class="name">{{item.name}}</span>
                  <span class="rank">本店销量第{{index+1}}</span>
                  <span class="sel">月售{{item.sel}}</span>
                  <div>
                    <span class="symbol">￥</span>
                    <span class="price-num">{{item.price}}</span>
                    <van-icon id="icon"  name="add" size="2rem" color="darkgray" @click="addFoodToCart(item)"/>
                  </div>
                </div>
              </div>
            </van-badge>
          </van-col>
        </div>
      </van-row>
    </div>
  </div>
</template>

<script>
import {local} from "../../storage"
import {Notify} from 'vant'

export default {
  name: 'Main',
  data(){
    return{
      headList:['本店热销榜'],
      foods:[
        {name:"南瓜稀饭",img:"1.jpg",category:'精选热菜',price:1,sel:8,ordered:1},
        {name:"白菜豆腐",img:"2.jpg",category:'特色菜',price:1,sel:7,ordered:2},
        {name:"爆炒青菜",img:"3.jpg",category:'田园时蔬',price:1,sel:6,ordered:3},
        {name:"橘子汁",img:"4.jpg",category:'田园时蔬',price:2,sel:5,ordered:4},
        {name:"包子套餐",img:"5.jpg",category:'田园时蔬',price:3,sel:12,ordered:0},
      ],
    }
  },
  methods:{
    buy(name){
      console.log('您购买了'+name);
    },
    sortSel(){
      let sortArray = this.foods
      let len = this.foods.length;
      for(let i = 0; i < len-1; i++){
        for(let j = 0; j < len-1-i; j++){
          if(this.foods[j].sel<this.foods[j+1].sel){
            var temp =this.foods[j];
            this.foods[j]=this.foods[j+1];
            this.foods[j+1]=temp;
          }
        }
      }
      return this.foods;
    },
    addFoodToCart(item){
      console.log('加入'+item.name+'到购物车');
      console.log(item);
      let msg = local.addFoodToCart(item,1);
      console.log(msg);
      this.notify('加入成功！');
    },
    notify(msg){
      Notify({ type: 'success', message: msg , duration:500});
    }
  },
  mounted () {
    let key = 'ordered';
    local.set(key,this.foods);
    console.log('将foods加入ordered');
    let cart = {青菜:{"name":'青菜',"price":1}};
    cart.白菜={"name":'白菜',"price":1};
    cart['胡萝卜']={"name":'胡萝卜',"price":1};
    console.log(cart);
    console.log(cart['青菜']);

    let tmp = local.getCart();
    console.log(tmp);
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
#hotFood{
  background-color: #f0f0f0;
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
      font:normal bold 1.2rem arial,sans-serif;
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
    #icon{
      float: right;
      margin-top: 0.1rem;
    }

  }
}
#hotFood /deep/.van-badge{
  opacity: 0;
}

</style>
