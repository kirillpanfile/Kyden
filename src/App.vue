<template>
  <div class="container container--outer">
    <my-header></my-header>
    <router-view></router-view>
  </div>
</template>

<script>
import MyHeader from "./components/MyHeader.vue";
export default {
  name: "app",
  components: {
    MyHeader,
  },
  mounted() {
    this.$store.dispatch("getProducts");
  },
};
</script>
<style lang="scss"></style>
