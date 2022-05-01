<template>
  <ul id="users">
    <li v-for="user in users" v-bind:key="user.id">{{ user.name }}</li>
  </ul>
</template>

<script>
export default {
  name: "app",

  data() {
    return {
      users: [],
    };
  },

  created() {
    fetch("/api/products")
      .then((res) => res.json())
      .then((json) => {
        this.users = json.users;
      });
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
  margin: 0;
  padding: 0;
  background-color: #111111;
}
#app {
  height: 100vh;
  background-image: url("/src/assets/pattern bg.png");
  opacity: 0.03;
  z-index: -1;
}
</style>
