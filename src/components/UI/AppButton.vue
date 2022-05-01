<template>
  <button class="btn btn--primary">
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

<style lang="scss" scoped>
.btn {
  font-family: "Roboto Condensed", sans-serif;
  line-height: 1.2;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0px;
  display: inline-block;
  transition: opacity 200ms, border-color 200ms, background-color 200ms,
    color 200ms;
  border: 2px solid transparent;
  border-radius: 0px;
  padding: 17px 20px 16px;
  cursor: pointer;
  font-size: 0.95rem;
  line-height: 1.2;
  text-align: center;
}

.btn--expand {
  display: block;
  width: 100%;
}
.btn--primary {
  background-color: #cd412b;
  color: #f6eae1;
}
.btn:hover {
  opacity: 0.8;
}
</style>
