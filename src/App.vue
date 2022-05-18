<template>
  <div v-if="!loading" class="container container--outer">
    <my-header></my-header>
    <router-view></router-view>
    <app-line></app-line>
    <my-footer></my-footer>
  </div>
</template>

<script>
import MyHeader from "/src/components/myHeader.vue";
import MyFooter from "/src/components/myFooter.vue";
export default {
  name: "app",
  components: {
    MyHeader,
    MyFooter,
  },
  data() {
    return {
      loading: true,
    };
  },
  mounted() {
    this.$store.dispatch("getProducts").then(() => {
      this.loading = false;
    });
    window.addEventListener("beforeunload", () => {
      this.$store.dispatch("addToLocalStorage");
    });
  },
};
</script>
<style lang="scss"></style>
