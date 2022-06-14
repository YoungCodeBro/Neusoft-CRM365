<template>
  <div id="orderFood">
    <div v-for="title in headList">
      <h2 :id="title" >{{title}}</h2>
      <van-row>
        <div>
          <van-col span="8" v-for="(item,index) in foods" :key="index" v-if="item.category===title" @click="buy(item.name)">
            <van-badge :content="0" >
              <div class="col-item">
                <img :src="item.img" alt="">
                <div class="item-attr">
                  <span class="name">{{item.name}}</span><br>
                  <span class="symbol">￥</span>
                  <span class="price-num">{{item.price}}</span>
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
export default {
  name: 'Main',
  data(){
    return{
      headList:['精选热菜','特色菜','城新小炒','田园时蔬','粗粮主食'],
      foods:[
        {name:"南瓜稀饭",img:require("../../assets/Image/1.jpg"),category:'精选热菜',price:1,sel:8},
        {name:"白菜豆腐",img:require("../../assets/Image/2.jpg"),category:'特色菜',price:1,sel:8},
        {name:"爆炒青菜",img:require("../../assets/Image/3.jpg"),category:'田园时蔬',price:1,sel:8},
        {name:"橘子汁",img:require("../../assets/Image/4.jpg"),category:'田园时蔬',price:2,sel:5},
        {name:"包子套餐",img:require("../../assets/Image/5.jpg"),category:'田园时蔬',price:3,sel:12},
        {name:"煎饼",img:require("../../assets/Image/6.jpg"),category:'精选热菜',price:4,sel:5},
        {name:"红烧肉",img:require("../../assets/Image/7.jpg"),category:'特色菜',price:5,sel:2},
        {name:"包子套餐",img:require("../../assets/Image/5.jpg"),category:'特色菜',price:1,sel:9},
        {name:"煎饼",img:require("../../assets/Image/6.jpg"),category:'城新小炒',price:1,sel:8},
        {name:"红烧肉",img:require("../../assets/Image/7.jpg"),category:'特色菜',price:1,sel:8},
        {name:"包子套餐",img:require("../../assets/Image/5.jpg"),category:'田园时蔬',price:5,sel:8},
        {name:"煎饼",img:require("../../assets/Image/6.jpg"),category:'城新小炒',price:6,sel:10},
        {name:"红烧肉",img:require("../../assets/Image/7.jpg"),category:'田园时蔬',price:1,sel:8},
        {name:"包子套餐",img:require("../../assets/Image/5.jpg"),category:'田园时蔬',price:1,sel:8},
        {name:"煎饼",img:require("../../assets/Image/6.jpg"),category:'粗粮主食',price:7,sel:8},
        {name:"红烧肉",img:require("../../assets/Image/7.jpg"),category:'粗粮主食',price:8,sel:11},
        {name:"包子套餐",img:require("../../assets/Image/5.jpg"),category:'特色菜',price:1,sel:1},
        {name:"煎饼",img:require("../../assets/Image/6.jpg"),category:'精选热菜',price:1,sel:8},
        {name:"红烧肉",img:require("../../assets/Image/7.jpg"),category:'精选热菜',price:1,sel:8},
      ]
    }
  },
  methods:{
    buy(name){
      console.log('您购买了'+name);
    }
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
  padding: 0.5rem;
}
#orderFood{
  background-color: #f0f0f0;
}
.van-col{
}
.van-col{
  padding: 10px;
  .col-item{
    background-color: #f7f8f8;
    border-radius: 10px;
    text-align: center;
    height:10rem;
  }
  img{
    width: 100%;
    border-top-right-radius: 0.5rem;
    border-top-left-radius: 0.5rem;
  }
  .item-attr{
    .name{
      font:normal bold 0.8rem arial,sans-serif;
    }
    .price-num{
      color: red;
      font: normal bold 1rem Arial,sans-serif;
    }
    .symbol{
      color: red;
      font: 0.1rem bold normal Arial,sans-serif;
    }
  }
}
#orderFood /deep/.van-badge{
  opacity: 0;
}

</style>
