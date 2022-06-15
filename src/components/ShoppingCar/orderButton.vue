<template>
  <div class="buttonDiv">
    <button class="button">
      <img src="../../assets/Image/doorder.png" alt="" />
    </button>
     <p>下单</p>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style lang="scss">
.buttonDiv {
  position: relative;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  //background: rgba(255, 0, 0,0.1);
  background:red;

}

.button img {
  position: absolute;
  left: 1rem;
  top: 0.4rem;
  width: 2rem;
  height: 2rem;
}

.buttonDiv p {
  position: absolute;
top: 1.4rem;
left: 1rem;
  color: white;
  font-size:10px;
}
</style>