<template>
  <div id="app">
    <img src="../../assets/Image/bingqilin.png" alt="" class="picture" />
    <div class="header"></div>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  list-style: none;
}
#app {
  border-radius: 0.5rem;
  background: #eee;
}
//图片背景模糊化
.picture {
  -webkit-filter: blur(5px);
  filter: blur(5px);
  width: 100%;
  border-radius: 10%;
  height: 53rem;
}
</style>