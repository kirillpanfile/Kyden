<template>
  <div class="container container--outer" v-if="!loading">
    <my-header></my-header>
    <router-view></router-view>
    <app-line></app-line>
    <my-footer></my-footer>
  </div>
  <my-loader :load="loading"></my-loader>
</template>

<script>
import MyHeader from "/src/components/myHeader.vue";
import MyFooter from "/src/components/myFooter.vue";
import myLoader from "/src/components/myLoader.vue";
export default {
  name: "app",
  components: {
    MyHeader,
    MyFooter,
    myLoader,
  },
  data() {
    return {
      loading: true,
      loader: false,
    };
  },
  watch: {
    $route() {
      window.scrollTo(0, 0);
      document.body.classList.remove("checkout-open");
    },
  },
  mounted() {
    this.$store.dispatch("getProducts").then(() => {
      this.loading = false;
    });
    window.addEventListener("beforeunload", () => {
      this.$store.dispatch("addToLocalStorage");
    });
    console.log("Kyden");
    console.log("FOR YOUR SECURITY DO NOT TYPE ANYTHING HERE");
  },
};
</script>
<style lang="scss"></style>
