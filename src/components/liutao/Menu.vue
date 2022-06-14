<template>
  <div>
    <v-header></v-header>
    <v-side></v-side>
    <v-main></v-main>
  </div>
</template>

<script>
import Header from './Header'
import Side from './Side'
import Main from './Main'
export default {
  name: 'Menu',
  components: {
    'v-header': Header,
    'v-side': Side,
    'v-main': Main
  }
}
</script>

<style scoped>

</style>
