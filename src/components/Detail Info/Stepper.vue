<template>
  <div class="stepper">
    <button class="minus" @click="minus" :disabled="left">
      <img src="../../assets/Image/minus.svg" alt="减号" />
    </button>
    <input type="text" @change="emitevent($event)" :value="num" />
    <button class="plus" @click="plus" :disabled="right">
      <img src="../../assets/Image/plus.svg" alt="加号" />
    </button>
  </div>
</template>

<script>
export default {
  props: {
    value: Number,
  },
  data() {
    return {
      //测试时注释
      num: this.value,
      // num: 1,
    };
  },
  computed: {
    //控制加减号禁用
    left() {
      return this.num == 1;
    },
    right() {
      return this.num == 20;
    },
  },
  methods: {
    //发送事件以便使用v-model，同时限制只能输入范围为1-20整数
    emitevent(event) {
      let temp = Number.parseInt(event.target.value);
      if (Number.isNaN(temp)) {
        this.num = 1;
        event.target.value = 1;
      } else if (temp < 1) {
        this.num = 1;
        event.target.value = 1;
      } else if (temp > 20) {
        this.num = 20;
        event.target.value = 20;
      } else {
        this.num = temp;
        event.target.value = temp;
      }
      this.$emit("e-change", this.num);
    },
    minus() {
      this.num--;
      document.querySelector("input").value = this.num;
      this.$emit("e-change", this.num);
    },
    plus() {
      this.num++;
      document.querySelector("input").value = this.num;
      this.$emit("e-change", this.num);
    },
  },
};
</script>

<style lang="css" scoped>
.stepper {
  display: flex;
}
button img {
  height: 28px;
  width: 28px;
}
button {
  border: none;
}
input {
  border: none;
  text-align: center;
  width: 30px;
}
</style>