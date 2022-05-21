<template>
  <transition>
    <div class="loading" v-if="load">
      <div class="loading-text">
        <span class="loading-text-words">K</span>
        <span class="loading-text-words">Y</span>
        <span class="loading-text-words">D</span>
        <span class="loading-text-words">E</span>
        <span class="loading-text-words">N</span>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "my-loader",
  data() {
    return {
      load: true,
    };
  },
  mounted() {
    setTimeout(() => {
      this.load = false;
    }, 1000);
  },
};
</script>

<style scoped lang="scss"></style>
