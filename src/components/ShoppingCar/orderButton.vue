<template>
  <div id="app">
    <div class="buttonDiv">
      <button class="button" @click="clickT" >
        <img src="../../assets/Image/doorder.png" alt="" />
      </button>
      <p>下单</p>
    </div>
  </div>
</template>

<script>
import { local } from "../../storage";
export default {
  name: "App",
  methods: {
    clickT() {
      local.clearCart();
      alert("已下单");
      this.$router.push('/order')
    },
  },
  
};
</script>

<style lang="css" scoped>
#app {
  position: relative;
  height: 200px;
}
.buttonDiv {
  position: fixed;
  z-index: 5;
  bottom: 0.5rem;
  right: 0.5rem;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  /* background: rgba(255, 0, 0,0.1); */
  background: red;
}

.button img {
  position: absolute;
  left: 1rem;
  top: 0.4rem;
  width: 2rem;
  height: 2rem;
}
.buttonDiv {
  opacity: 0.5;
}
.buttonDiv p {
  position: absolute;
  top: 2rem;
  left: 1rem;
  color: white;
  font-size: 10px;
}
</style>