<template>
  <div>
    <h1>Welcome to Post page</h1>
    <p>
      This is the page that opens on
      <strong>/blog/{{ $route.params.id }}</strong> route
      {{ product }}
    </p>
  </div>
</template>

<script>
export default {
  computed: {
    product() {
      return this.$store.state.products.filter(
        (el) => el.id == this.$route.params.id
      );
    },
  },
};
</script>

<style></style>
