<template>
  <main>
    <div class="hero-section">
      <div class="hero-section__decor"><div>With Love From Kyden</div></div>
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
        <div class="featured__title">FEATURED PRODUCTS</div>
        <div class="featured-row">
          <div class="featured__item">
            <div class="featured-image">
              <img src="../assets/images/prod/1.png" alt="" />
            </div>
            <div class="featured-name">KYDEN ACDC</div>
            <div class="featured-price">$25.50</div>
          </div>
          <div class="featured__item">
            <div class="featured-image">
              <img src="../assets/images/prod/2.png" alt="" />
            </div>
            <div class="featured-name">KYDEN ACDC</div>
            <div class="featured-price">$25.50</div>
          </div>
          <div class="featured__item">
            <div class="featured-image">
              <img src="../assets/images/prod/3.png" alt="" />
            </div>
            <div class="featured-name">KYDEN ACDC</div>
            <div class="featured-price">$25.50</div>
          </div>
          <div class="featured__item">
            <div class="featured-image">
              <img src="../assets/images/prod/4.png" alt="" />
            </div>
            <div class="featured-name">KYDEN ACDC</div>
            <div class="featured-price">$25.50</div>
          </div>
        </div>
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
