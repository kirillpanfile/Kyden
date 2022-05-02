<template>
  <button
    class="btn"
    :class="{
      'btn--primary': type == 'primary',
      'btn--expand': type == 'expand',
    }"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "app-button",
  props: {
    type: {
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped></style>
