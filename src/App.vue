<template>
  <div class="container container--outer">
    <my-header></my-header>
    <router-view></router-view>
    <div class="line"></div>
    <my-footer></my-footer>
  </div>
</template>

<script>
import MyHeader from './components/MyHeader.vue'
import MyFooter from './components/MyFooter.vue'
export default {
  name: 'app',
  components: {
    MyHeader,
    MyFooter
  },
  mounted() {
    this.$store.dispatch('getProducts')
  }
}
</script>
<style lang="scss"></style>
