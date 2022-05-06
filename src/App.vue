<template>
  <div class="container container--outer">
    <my-header></my-header>
    <router-view></router-view>
    <app-line></app-line>
    <my-footer></my-footer>
  </div>
</template>

<script>
import MyHeader from './components/myHeader'
import MyFooter from './components/myFooter'
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
