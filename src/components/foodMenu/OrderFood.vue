<template>
  <div id="orderFood">
    <div v-for="foods in menu">
      <h2 :id="foods.nameCn">{{foods.nameCn}}</h2>
      <van-row>
        <div>
          <van-col span="8" v-for="(item,index) in foods.menuList" :key="index" @click="buy(item.name)">
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
      urlHeader:"https://pcp-pic.hwwt8.com",
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
    },
    downloadIamge(imgsrc, name) {
      //下载图片地址和图片名
      var image = new Image();
      // 解决跨域 Canvas 污染问题
      image.setAttribute("crossOrigin", "anonymous");
      image.onload = function() {
        var canvas = document.createElement("canvas");
        canvas.width = image.width;
        canvas.height = image.height;
        var context = canvas.getContext("2d");
        context.drawImage(image, 0, 0, image.width, image.height);
        var url = canvas.toDataURL("image/png"); //得到图片的base64编码数据

        var a = document.createElement("a"); // 生成一个a元素
        var event = new MouseEvent("click"); // 创建一个单击事件
        a.download = name || "photo"; // 设置图片名称
        a.href = url; // 将生成的URL设置为a.href属性
        a.dispatchEvent(event); // 触发a的单击事件
      };
      image.src = imgsrc;
    },
    // 改downs这个函数就行，downloadIamge（‘图片下载地址’，图片名字）
    downs(index) {
      // 主要是为了名字不重复
      var name = new Date().getTime();
      this.downloadIamge(this.result[index].newImgUrl, `${name}`);
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
