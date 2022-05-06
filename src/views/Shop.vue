<template>
  <div class="shop">
    <div class="shop__container">
      <div class="shop__title">
        <h1>NEW PRODUCTS</h1>
      </div>
      <div class="shop__wrapper">
        <div v-for="item in products" :key="item.id">
          <my-product
            class="shop__product"
            :image="item.image"
            :name="item.name"
            :price="item.price"
            :id="item.id"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import myProduct from '@/components/myProduct'
export default {
  name: 'Shop',
  components: {
    myProduct
  },
  computed: {
    products() {
      return this.$store.state.products
    }
  }
}
</script>
