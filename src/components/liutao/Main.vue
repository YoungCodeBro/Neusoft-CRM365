<template>
  <div>
    <h2>精选热菜</h2>
    <van-grid :column-num="3" :gutter="10" icon-size="100px">
      <van-grid-item :icon="item.img" :text="item.name" v-for="(item,index) in foods" :key="index" v-if="item.flag==1" />
    </van-grid>
    <h2>特色菜</h2>
    <van-grid :column-num="3" :gutter="10" icon-size="100px">
      <van-grid-item :icon="item.img" :text="item.name" v-for="(item,index) in foods" :key="index" v-if="item.flag==2" />
    </van-grid>
  </div>
</template>

<script>
export default {
  name: 'Main',
  data(){
    return{
      foods:[
        {name:"南瓜稀饭",img:require("../../assets/Image/1.jpg"),flag:1},
        {name:"白菜豆腐",img:require("../../assets/Image/2.jpg"),flag:1},
        {name:"爆炒青菜",img:require("../../assets/Image/3.jpg"),flag:2},
        {name:"橘子汁",img:require("../../assets/Image/4.jpg"),flag:1},
        {name:"包子套餐",img:require("../../assets/Image/5.jpg"),flag:1},
        {name:"煎饼",img:require("../../assets/Image/6.jpg"),flag:2},
        {name:"红烧肉",img:require("../../assets/Image/7.jpg"),flag:2},
      ]
    }
  },
}
</script>

<style scoped>
h2{
  border: 1px red solid;
  text-align: center;
}
</style>
