<template>
  <div class="stepper">
    <button class="minus" @click="minus" :disabled="left">
      <img src="../../assets/Image/minus.svg" alt="减号" />
    </button>
    <input type="text" :value="value" @change.stop.prevent="checkNum($event)" />
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
  computed: {
    //控制加减号禁用
    left() {
      return this.value == 1;
    },
    right() {
      return this.value == 20;
    },
  },
  methods: {
    //向父组件发送事件方便更新数据，同时限制只能输入范围为1-20整数
    checkNum(event) {
      let temp = Number.parseInt(event.target.value);
      let emitNum;
      if (Number.isNaN(temp)) {
        emitNum = 1;
      } else if (temp < 1) {
        emitNum = 1;
      } else if (temp > 20) {
        emitNum = 20;
      } else {
        emitNum = temp;
      }
      this.$emit("change", emitNum);
    },
    minus() {
      this.$emit("change", this.value - 1);
    },
    plus() {
      this.$emit("change", this.value + 1);
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