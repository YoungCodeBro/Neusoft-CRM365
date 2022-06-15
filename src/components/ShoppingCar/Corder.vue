<template>
  <div class="buttonDiv">
    <button class="button">
      <img src="../../assets/Image/menu.png" alt="" />
    </button>
     <p>继续点菜</p>
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
  background: black;
  opacity: 0.7;
}

.button img {
  position: absolute;
  left: 0.9rem;
  top: 0.6rem;
  width: 2rem;
  height: 2rem;
}

.buttonDiv p {
  position: absolute;
top: 1.5rem;
left: 0.6rem;
  color: white;
  font-size:10px;
}
</style>