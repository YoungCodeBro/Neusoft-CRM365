<template>
  <div>
    <van-sticky offset-top="20rem">
      <button class="nav" @click="showPopup" :style="{left:leftValue}">
        <img :src="require('../../assets/Image/nav.png')"  alt="">
        <span id="navBut">菜单</span>
      </button>
    </van-sticky>

    <van-popup v-model="show" position="left" :overlay="false">
      <van-sidebar v-model="activeKey" >
        <van-sidebar-item title="精选热菜" @click="scrollToView('精选热菜')" />
        <van-sidebar-item title="特色菜" @click="scrollToView('特色菜')"/>
        <van-sidebar-item title="城新小炒"  @click="scrollToView('城新小炒')"/>
        <van-sidebar-item title="田园时蔬"  @click="scrollToView('田园时蔬')"/>
        <van-sidebar-item title="粗粮主食"  @click="scrollToView('粗粮主食')"/>
      </van-sidebar>
    </van-popup>
  </div>
</template>

<script>
export default {
  name: 'side',
  data () {
    return {
      show: false,
      activeKey: 0,
      leftValue: '-1rem',
  }
  },
  methods: {
    showPopup(){
      if(document.getElementById('navBut').innerHTML==='返回'){
        this.$router.push('/menu');
        document.getElementById('navBut').innerHTML = '菜单';
      }else{
        this.show = !this.show;
        if(this.leftValue==='-1rem'){
          this.leftValue='4rem';
        }else{
          this.leftValue='-1rem';
        }
      }
    },
    scrollToView(title){
      this.showPopup();
    //先获取目标位置距离
      let targetbox= document.getElementById(title);
      this.target= targetbox.offsetTop-80;
      console.log(this.target);

    //再滑动指定距离
      window.scrollTo({
        top:this.target,
        left:0,
        behavior:"smooth"
      });
    }
  }
}
</script>

<style scoped>
.van-sidebar{
  height: 100vh;
}

>>> .van-overlay{
  background-color: rgba(255,255,0,0.1);
}
::v-deep [class*='van-hairline']::after{
  border-radius: 30px;
  border:10px solid red;
}
>>> [class*='van-hairline']::after{
  border-radius: 30px;
  border:10px solid red;
}
.nav{
  left: -1rem;
  position: absolute;
  top: 42%;
  background-color: rgb(132,128,128,0.5);
  width: 5rem;
  height: 5rem;
  text-align: center;
  border-bottom-right-radius: 60%;
  border-top-right-radius: 60%;
  z-index: 2;
  transition: 0.25s linear;
}
.nav img{
  height: 2.5rem;
  width: 3rem;
  margin-top: 0.5rem;
  margin-left: 0.5rem;
}
.nav span{
  color: #fff;
}

</style>
