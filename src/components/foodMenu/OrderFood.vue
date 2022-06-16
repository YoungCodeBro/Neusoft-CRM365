<template>
  <div id="orderFood">
    <div v-for="foods in menu">
      <h2 :id="foods.nameCn">{{foods.nameCn}}</h2>
      <van-row>
        <div>
          <van-col span="8" v-for="(item,index) in foods.menuList" :key="index" @click="toDetail(item.nameCn,item.imageUrl,item.price/100,1,item.descCn)">
            <van-badge :content="0" >
              <div class="col-item">
                <img :src="require('../../assets/kfcfood/'+item.imageUrl)" alt="菜图">
                <div class="item-attr">
                  <span class="name">{{item.nameCn}}</span>
                  <div class="price">
                    <span class="symbol">￥</span>
                    <span class="price-num">{{item.price/100}}</span>
                  </div>
                </div>
              </div>
            </van-badge>
          </van-col>
        </div>
      </van-row>
    </div>
    <nav-button></nav-button>
  </div>
</template>

<script>
import NavButton from '../nav/NavButton'
export default {
  name: 'Main',
  data(){
    return{
      foods:[],
      menu:{},
      isShow:false,
      urlHeader:"https://pcp-pic.hwwt8.com",
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
    requestData(){
      let api="http://localhost:3003/data";
      this.$http.jsonp(api).then(function (response) {
        this.menu=response.data.data;
        console.log(this.menu)
      },function (err){
        console.log(err);
      })
    },

  },
  mounted () {
    this.requestData();
  },
  created () {
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
  padding: 0.5rem;
}
#orderFood{
  background-color: #f0f0f0;
}
.van-col{
}
.van-col{
  padding: 0.7rem;
  .col-item{
    background-color: #f7f8f8;
    border-radius: 0.7rem;
    text-align: center;
    height:10rem;
  }
  img{
    width: 100%;
    border-top-right-radius: 0.5rem;
    border-top-left-radius: 0.5rem;
  }
  .item-attr{
    height: 50%;
    //上右下左
    .name{
      position: relative;
      top: 0.5rem;
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
    .price{
      position: absolute;
      bottom: 0.5rem;
      width: 100%;
    }

  }
}
#orderFood /deep/.van-badge{
  opacity: 0;
}

</style>
