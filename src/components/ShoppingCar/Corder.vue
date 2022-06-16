<template>
<div id="app">
  <div class="buttonDiv">
    <button class="button" @click="clickT()">
      <img src="../../assets/Image/menu.png" alt="" />
    </button>
     <p>继续点菜</p>
  </div>
  </div>
</template>

<script>
export default {
  name: "App",
  methods: {
    clickT(){
     this.$router.push('/menu')
    }
  }
};
</script>

<style lang="css" scoped>
#app{ 
  position: relative;
  height: 200px;
}
.buttonDiv {
  position: fixed;
  bottom: 0.5rem;
  left: 40%;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  /* //background: rgba(255, 0, 0,0.1); */
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
top: 2rem;
left: 0.6rem;
  color: white;
  font-size:10px;
}
</style>