<template>
  <div id="app">
    <v-header></v-header>
    <v-side></v-side>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from './Header'
import Side from './Side'
export default {
  name: 'Menu',
  components: {
    'v-header': Header,
    'v-side': Side,
  },
}
</script>

<style scoped>
#app{
}
</style>
