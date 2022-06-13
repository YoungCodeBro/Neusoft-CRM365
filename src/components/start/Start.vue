<template>
  <div>
    <div class="title">
      <img src="../../assets/restaurant.svg" alt="用餐图标" />
      <h2>用餐人数</h2>
    </div>
    <p>请选择正确的用餐人数，小二马上给你送餐具</p>
    <div class="meal">
        <div v-for="num in 12" :key="num" class="mealcount">{{num}}人</div>
    </div>
    <div class="button">
        <button>开始点菜</button>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="css" scoped>
* {
    box-sizing: border-box;
}
.title {
    margin: 50px auto;
    width: 200px;
    height: 70px;
    background: black;
    color: white;
    text-align: center;
    display: flex;
    align-content: center;
    border-radius: 11px;
}
p {
    text-align: center;
    margin: 50px auto;
    color: red;
    font-size: 0.9em;
}
.meal {
    display: flex;
    flex-flow: row wrap;
    margin: 0px auto;
    width: 90%;
    justify-content: space-between;
}
.mealcount {
    background: white;
    border: 1px solid grey;
    width: 21%;
    margin-top: 20px;
    height: 50px;
    line-height: 50px;
    text-align: center;
}
.button {
    width: 100%;
}
button {
    margin: 70px auto;
    display: block;
    width: 70px;
    height: 70px;
    border-radius: 50%;
    border: none;
    padding: 13px;
    background: orangered;
    color: white;
}
</style>