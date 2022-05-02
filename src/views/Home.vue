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
            time.
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
      <div class="featured-section__wrapper featured-wrapper">
        <div class="featured__title">FEATURED PRODUCTS</div>
        <app-button type="primary" class="featured__button">
          <router-link to="shop">SHOP</router-link>
        </app-button>
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
export default {};
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
