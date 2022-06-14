<template>
  <div>
    <div class="title">
      <img src="../../assets/Image/canju.png" alt="用餐图标" />
      <h3>用餐人数</h3>
    </div>
    <p>请选择正确的用餐人数，小二马上给你送餐具</p>
    <form>
      <div class="meal">
        <div v-for="num in maxPersonNum" :key="num" class="mealcount">
          <!-- 隐藏输入单选框，点击label标签选择人数，结果绑定到mealPersonNum中 -->
          <input
            type="radio"
            name="mealnum"
            :id="'pc' + num"
            :value="num"
            v-model="mealPersonNum"
            required
          />
          <label :for="'pc' + num"> {{ num }}人 </label>
        </div>
      </div>
      <div class="button">
        <button @click.prevent="startOrder" type="button">开始点菜</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      maxPersonNum: 12,
      mealPersonNum: 0,
    };
  },
  methods: {
    startOrder() {
      //检查用餐人数是否正确
      if (this.mealPersonNum != 0) {
        // 跳转到主页面
        this.$router.push("/home");
      } else {
        alert("请选择用餐人数！");
      }
    },
  },
};
</script>

<style lang="css" scoped>
* {
  box-sizing: border-box;
}
img {
  height: 70%;
}
.title {
  margin: 50px auto;
  width: 200px;
  height: 70px;
  background: black;
  color: white;
  display: flex;
  align-content: center;
  border-radius: 11px;
  justify-content: center;
  align-items: center;
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
.mealcount label {
  display: block;
  height: 100%;
  width: 100%;
}
.button {
  width: 100%;
}
button {
  margin: 150px auto;
  display: block;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  border: none;
  padding: 13px;
  background: orangered;
  color: white;
}
input {
  display: none;
}
input:checked + label {
  border: 2px solid red;
}
</style>
