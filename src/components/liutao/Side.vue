<template>
  <div>
    <van-icon name="bars" size="50px" @click="showPopup" />
    <van-popup v-model="show" position="left" :overlay="true" closeable  close-icon="close" close-icon-position="bottom-right"  >
      <van-sidebar v-model="activeKey" >
        <van-sidebar-item title="标签名称" />
        <van-sidebar-item title="标签名称" />
        <van-sidebar-item title="标签名称" />
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
    }
  },
  methods: {
    showPopup(){
      this.show = !this.show;
    },

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
</style>
