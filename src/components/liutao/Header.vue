<template>
  <van-sticky>
    <div id="app" >
        <div class="a-header">
          <div class="header-list" >
            <img :src="require('../../assets/Image/rexiao.png')" class="picture" @click="movePage('/menu/hot')">
            <br><span>热销榜</span>
          </div>
          <div class="header-list" >
            <img :src="require('../../assets/Image/caidan.png')" class="picture" @click="movePage('/menu/ordered')">
            <br><span>点过的菜</span>
          </div>
          <div class="header-list" style="border-right-width: 0">
            <img :src="require('../../assets/Image/sousuo.png')" class="picture" @click="movePage('/menu/like')">
            <br><span>猜你喜欢</span>
          </div>
        </div>
    </div>
  </van-sticky>

</template>

<script>
export default {
  name: 'Header',
  methods:{
    alertOut(msg){
      console.log(msg);
    },
    movePage(path){
      let nav = document.getElementById('navBut').innerHTML = '返回';
      console.log(nav);
      this.$router.push(path);
    }
  }

}
</script>

<style scoped>


#app{
  padding: 0.1em;
  font-size: 10px;
  font-family: '宋体',serif;
  color: #555;
  background-color: #f7f7f7;
}

.a-header{
  width: 95%;
  margin: 0 auto;
  text-align: center;
  padding:0.5rem;
  background-color: #fff;
  display: flex;
  border-radius: 0.5rem;
  margin-top: 1rem;
}
.header-list{
  flex:1;
  text-align: center;
  border-right: 2px solid #eee;
}

.picture{
  height: 2rem;
  width: 2rem;
}

</style>
