<template>
  <main>
    <div class="hero-section">
      <div class="hero-section__decor"><div>With Love From Kyden</div></div>
      <div class="hero-section__wrapper hero-wrapper">
        <div class="hero-wrapper__title">
          NEW COLLECTION IS <br />
          COMING OUT!
        </div>
        <div class="hero-wrapper__descr">
          Check out Kyden winter collection. Available only for a limited time.
        </div>
        <div class="hero-wrapper__button">
          <ButtonCustom
            ><router-link to="shop"
              >SHOP THE NEW COLECTION</router-link
            ></ButtonCustom
          >
        </div>
      </div>
    </div>
    <div class="featured-section">
      <div class="featured-section__wrapper featured-wrapper">
        <div class="featured__title">FEATURED PRODUCTS</div>
        <ButtonCustom class="featured__button">
          <router-link to="shop">SHOP</router-link>
        </ButtonCustom>
        <div class="featured-row">
          <product
            v-for="(item, index) in featuredItems"
            :key="index"
            :name="item.name"
            :price="item.price"
            :img="item.img"
          />
        </div>
      </div>
    </div>
    <div class="line"></div>
    <footer class="footer">
      <div class="footer-wrapper">
        <div class="footer-wrapper__col footer-col">
          <div class="footer-col__title">JOIN THE NEWSLETTER</div>
          <form action="" @submit.prevent>
            <input type="text" placeholder="Your Email" />
            <button>SUBSCRIBE</button>
          </form>
        </div>
        <div class="footer-wrapper__col footer-col">
          <div class="footer-col__title">FIND US ON SOCIAL MEDIA</div>
          <div>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-facebook"></i>
          </div>
        </div>
        <div class="footer-wrapper__col footer-col">
          <div class="footer-col__title">NEED HELP?</div>
          <div class="footer-col__help">
            <a href="mailto:kirillpanfile@gmail.com">Contact us</a>
            <a href="">Privacy Policy</a>
            <span>© 2022</span>
          </div>
        </div>
      </div>
    </footer>
  </main>
</template>

<script>
import ButtonCustom from '../components/Button.vue'
import Product from '../components/Product.vue'
export default {
  components: { ButtonCustom, Product },
  inject: ['clothes'],
  data() {
    return {
      items: this.clothes
    }
  },
  created() {
    console.log(this.items)
  },
  computed: {
    featuredItems() {
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      return this.items
        .sort((a, b) =>
          a.raiting < b.raiting ? 1 : b.raiting < a.raiting ? -1 : 0
        )
        .slice(0, 4)
    }
  }
}
</script>

<style>
.line {
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 20px;
  height: 2px;
  background: rgba(255, 255, 255, 0.12);
}
</style>
