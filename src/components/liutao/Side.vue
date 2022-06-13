<template>
  <div>
    <van-cell is-link @click="showPopup">展示弹出层</van-cell>
    <van-popup v-model="show" position="left" >内容</van-popup>
  </div>
</template>

<script>
export default {
  name: 'side',
  data () {
    return {
      show: false
    }
  },
  methods: {
    showPopup(){
      this.show = true;
    },
  }
}
</script>

<style scoped>

</style>
