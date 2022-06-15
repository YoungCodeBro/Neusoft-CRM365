<template>
  <div>
    <cmp-button
      class="navbutton"
      :text="'导航'"
      :icon="require('../../assets/Image/navigation.png')"
      @click.native="show = true"
    ></cmp-button>
    <van-overlay :show="show" @click="show = false">
      <div class="wrapper">
        <cmp-button
          :text="nav[0]"
          :icon="require(`../../assets/Image/${icon[0]}`)"
          :id="'b0'"
          @click.native.stop="show = false"
        ></cmp-button>
        <cmp-button
          v-for="num in 4"
          :key="num"
          :text="nav[num]"
          :icon="require(`../../assets/Image/${icon[num]}`)"
          :id="`b${num}`"
          @click.native.stop="goto(num)"
        ></cmp-button>
      </div>
    </van-overlay>
  </div>
</template>

<script>
import Button from "./Button.vue";
export default {
  data() {
    return {
      show: false,
      nav: ["返回", "菜单", "购物车", "我的订单", "结账"],
      icon: ["close.png", "book.png", "cart.png", "order.png", "wallet.png"],
      //跳转地址
      address: ["/menu",'/shoppingcar','/order','/order'],
    };
  },
  components: {
    "cmp-button": Button,
  },
  methods: {
    goto(num) {
        this.$router.push(this.address[num-1]);
    },
  },
};
</script>

<style lang="css" scoped>
* {
  box-sizing: border-box;
}
.navbutton {
  position: fixed;
  bottom: 10px;
  left: 10px;
}
/* 遮罩样式 */
.wrapper {
  height: 100%;
}
/* 遮罩内容位置 */
.btn {
  position: fixed;
}
#b0 {
  left: 10px;
  bottom: 10px;
}
#b1 {
  left: 0px;
  bottom: 260px;
}
#b2 {
  left: 70px;
  bottom: 200px;
}
#b3 {
  left: 130px;
  bottom: 120px;
}
#b4 {
  left: 150px;
  bottom: 10px;
}
</style>