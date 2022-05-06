<template>
  <main>
    <div class="hero-section">
      <div class="hero-section__decor"><div>With Love From Kyden</div></div>
      <div class="hero-section__wrapper">
        <div class="hero-wrapper">
          <h1 class="hero-wrapper__title">
            NEW COLLECTION IS <br />
            COMMING OUT!
          </h1>
          <p class="hero-wrapper__descr">
            Check out Kyden winter collection. Available only for a limited
            amount of time.
          </p>
          <div class="hero-wrapper__button">
            <router-link to="shop">
              <app-button style="padding: 18px 38px" type="primary"
                >SHOP THE NEW COLECTION</app-button
              >
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="featured-section">
      <div class="featured__container featured-section__wrapper">
        <div class="featured__data">
          <h1 class="featured__title">FEATURED PRODUCTS</h1>
          <div class="featured__button">
            <app-button type="skelet">VISIT STORE</app-button>
          </div>
        </div>
        <div class="featured-row">
          <div v-for="item in products" :key="item.id">
            <product
              :image="item.image"
              :name="item.name"
              :price="item.price"
              :id="item.id"
            />
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import product from "../components/MyProduct.vue";
export default {
  components: {
    product,
  },
  computed: {
    products() {
      try {
        let tmp = this.$store.state.products;
        return Object.values(tmp)
          .map((el) => (el = JSON.parse(JSON.stringify(el))))
          .sort((a, b) => b.stars - a.stars)
          .slice(0, 4);
      } catch (error) {
        console.table(error);
      }
    },
  },
};
</script>

<style>
.line {
  width: 100%;
  margin: 0 auto;
  margin-top: 40px;
  margin-bottom: 20px;
  height: 2px;
  background: rgba(255, 255, 255, 0.12);
}
</style>
