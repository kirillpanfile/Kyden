<template>
  <router-link
    :to="{
      path: '/product/' + id,
      query: {
        productName: name,
      },
    }"
  >
    <div class="product">
      <div class="product-inner">
        <div class="product-inner__image">
          <img :src="`/src/assets/Products/${image}`" alt="" />
        </div>
        <div class="product-inner__info">
          <h1>{{ name }}</h1>
          <div class="product-inner__price">
            <span>{{ price }}</span>
          </div>
        </div>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "product",
  props: {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss"></style>
