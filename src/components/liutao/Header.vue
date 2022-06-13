<template>
  <div>
    <van-row gutter="20">
      <van-col span="8">
        <span>热销榜</span>
      </van-col>
      <van-col span="8">
        <span>点过的菜</span>
      </van-col>
      <van-col span="8">
        <span>猜你喜欢</span>
      </van-col>
    </van-row>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>
.van-col{
  border: red 1px solid;
  height: 100px;
}
</style>
