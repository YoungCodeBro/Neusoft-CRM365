<template>
  <div class="hello">
    <van-badge :content="5">
      <div class="child" />
    </van-badge>
    <van-badge :content="10">
      <div class="child" />
    </van-badge>
    <van-badge content="Hot">
      <div class="child" />
    </van-badge>
    <van-badge dot>
      <div class="child" />
    </van-badge>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.child {
  width: 40px;
  height: 40px;
  background: #f2f3f5;
  border-radius: 4px;
}
</style>
