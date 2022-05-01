<template>
  <router-view>
    <router-link to="/">Home</router-link>
    <app-button>Hello</app-button>
  </router-view>
</template>

<script>
export default {
  name: "app",
  mounted() {
    this.$store.dispatch("getProducts");
  },
};
</script>
<style lang="scss">
html {
  line-height: 1.15;
  -webkit-text-size-adjust: 100%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
*,
*:before,
*:after {
  box-sizing: border-box;
}
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
  // background-color: rgba(0, 0, 0, 1);
  z-index: -1;
}
</style>
