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
<style lang="scss">
body {
  position: relative;
  padding-bottom: 0;
  width: 100%;
  min-height: 100%;
  background-color: #111111;
}
button {
  border: none;
  box-shadow: none;
  outline: none;
  -webkit-appearance: none;
  background: none;
  cursor: pointer;
}
#bg {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0.05;
  z-index: -1;
  background-image: url("/src/assets/pattern bg.png");
  opacity: 0.03;
  z-index: -1;
}
</style>
