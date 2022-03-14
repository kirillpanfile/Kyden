<template>
  <div class="shop-section">
    <div class="shop-section__wrapper shop-wrapper">
      <div class="shop__title">ALL PRODUCTS</div>
      <div class="shop-row">
        <product
          v-for="(item, index) in this.clothes"
          :key="index"
          :name="item.name"
          :price="item.price"
          :img="item.img"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Product from '../components/Product.vue'
export default {
  name: 'Shop',
  inject: ['clothes'],
  components: { Product }
}
</script>
