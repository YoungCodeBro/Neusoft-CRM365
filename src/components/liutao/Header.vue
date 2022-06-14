<template>
  <div>
    <van-grid :column-num="3" :gutter="10" icon-size="50px">
      <van-grid-item icon="hot-o" text="热销榜"  />
      <van-grid-item icon="records" text="点过的菜"  />
      <van-grid-item icon="search" text="猜你喜欢"  />
    </van-grid>
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
