<template>
  <div id="orderFood">
    <div v-for="title in menu">
      <h2 :id="title">{{title.nameCn}}</h2>
      <van-row>
        <div>
          <van-col span="8" v-for="(item,index) in foods" :key="index" v-if="item.category===title" @click="buy(item.name)">
            <van-badge :content="0" >
              <div class="col-item">
                <img :src="require('../../assets/Image/'+item.img)" alt="">
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
import axios from "axios";
export default {
  name: 'Main',
  data(){
    return{
      foods:[
        {name:"南瓜稀饭",img:"1.jpg",category:'精选热菜',price:1,sel:8},
      ],
      menu:{},
      isShow:false,
    }
  },
  methods:{
    buy(name){
      console.log('您购买了'+name);
    },
    requestData(){
      let api="http://localhost:3003/data";
      this.$http.jsonp(api).then(function (response) {
        this.menu=response.data.data;
        console.log(this.menu)
      },function (err){
        console.log(err);
      })
    }
  },
  mounted () {
    this.requestData();
  },
  created () {
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
