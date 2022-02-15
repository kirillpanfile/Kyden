<template>
  <div class="featured__item">
    <div class="featured-image">
      <img :src="require(`/src/assets/images/prod/${img}.png`)" alt="" />
    </div>
    <div class="featured-name">{{ name }}</div>
    <div class="featured-price">${{ price }}</div>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    price: {
      type: String,
      required: true
    },
    img: {
      type: String,
      required: true
    }
  }
}
</script>

<style></style>
