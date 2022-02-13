<template>
  <main>
    <div class="hero-section">
      <div class="hero-section__wrapper hero-wrapper">
        <div class="hero-wrapper__title">
          NEW COLECTION IS <br />
          COMMING OUT!
        </div>
        <div class="hero-wrapper__descr">
          Check out Kyden winter colection. Available only for a limited time.
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
        <div class="featured-title">FEATURED PRODUCTS</div>
      </div>
    </div>
  </main>
</template>

<script>
import ButtonCustom from '../components/Button.vue'
export default {
  components: { ButtonCustom }
}
</script>

<style></style>
