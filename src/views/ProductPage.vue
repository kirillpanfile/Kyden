<template>
  <div class="card card__container">
    <div class="card__wrapper">
      <div class="card__image">
        <img
          :src="require(`../assets/Products/${prodItem.image}`)"
          alt="product"
        />
      </div>
      <div class="card__info">
        <h1 class="card__name">{{ prodItem.name }}</h1>
        <div class="card__price">
          <span>{{ prodItem.price }}</span>
        </div>
        <div class="card__sizes">
          <span>SELECT SIZE:</span>
          <div class="card__sizes-buttons">
            <button
              class="card__sizes-button"
              v-for="size in prodItem.sizes"
              :key="size"
            >
              {{ size }}
            </button>
          </div>
          <div class="line"></div>
        </div>
        <div class="card__count">
          <select name="count" v-model="count">
            <option v-for="i in 5" :key="i">{{ i }}</option>
          </select>
          <app-button class="card__button" type="primary">
            ADD TO CART
          </app-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductPage',
  data() {
    return {
      count: 1
    }
  },
  computed: {
    prodItem() {
      return this.$store.state.products.filter(
        (el) => el.id == this.$route.params.id
      )[0]
    }
  },
  mounted() {
    setTimeout(() => {
      console.log(this.prodItem)
    }, 1000)
  }
}
</script>

<style></style>
