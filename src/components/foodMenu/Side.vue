<template>
  <div>
    <van-sticky offset-top="20rem">
      <button class="nav" @click="showPopup" :style="{left:leftValue}">
        <img :src="require('../../assets/Image/nav.png')"  alt="">
        <span id="navBut">菜单</span>
      </button>
    </van-sticky>

    <van-popup v-model="show" position="left" :overlay="false" >
      <van-sidebar v-model="activeKey">
        <div v-for="item in menu">
          <van-collapse v-model="activeName" accordion v-if="item.havaChild">
            <van-collapse-item :title="item.category" :name="item.nameCn" >
              <van-sidebar-item  :title="child" @click="scrollToView(child)" v-for="(child,index) in item.childs" :key="index"/>
            </van-collapse-item>
          </van-collapse>
          <van-sidebar-item  :title="item.nameCn" @click="scrollToView(item.nameCn)" v-if="!item.havaChild&&item.isShow" />
        </div>
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
      menu:[],
      activeName: '1',
  }
  },
  methods: {
    showPopup(){
      if(location.href!='http://localhost:8080/#/menu'){
        this.$router.push('/menu');
        document.getElementById('navBut').innerHTML = '菜单';
      }else{
        this.show = !this.show;
        if(this.leftValue==='-1rem'){
          this.leftValue='6.5rem';
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
    //再滑动指定距离
      window.scrollTo({
        top:this.target,
        left:0,
        behavior:"smooth"
      });
    },
    requestData(){
      let api="http://localhost:3003/data";
      this.$http.jsonp(api).then(function (response) {
        this.menu=response.data.data;
      },function (err){
        console.log(err);
      })
    }
  },
  mounted () {
    this.requestData();
  }
}
</script>

<style scoped>
.van-sidebar{
  height: 100vh;
  width: 125px;
}

>>> .van-overlay{
  background-color: rgba(255,255,0,0.1);
}

>>> .van-cell{
  background-color: #f7f8fa;
}

>>> .van-collapse-item__content{
  padding: 0 0;
  background-color: #f7f8fa;
}
>>> .van-sidebar-item {
  line-height: 0.3rem;
  border-bottom: 1px solid #ebedf0;
}

>>> .van-sidebar-item__text{
  left: 0.23rem;
}

.nav{
  left: -1rem;
  position: absolute;
  top: 42%;
  background-color: rgba(132,128,128,0.5);
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
