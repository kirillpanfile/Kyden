<template>
  <div class="header">
    <div class="header-wrapper">
      <button class="icon-menu" @click="menuInit()">
        <span></span>
        <span></span>
        <span></span>
      </button>
      <div class="header-wrapper__links">
        <i class="fa-brands fa-twitter"></i>
        <i class="fa-brands fa-instagram"></i>
        <i class="fa-brands fa-facebook"></i>
      </div>
      <div class="header-wrapper__logo">
        <router-link to="/">
          <img src="../assets/images/LOGO-WHITE.png" alt="" />
        </router-link>
      </div>
      <div class="header-wrapper__store header-store">
        <div class="header-store__cart">
          <i class="fa-solid fa-cart-shopping"></i>
        </div>
        <div class="header-store__button">
          <ButtonCustom><router-link to="shop">Shop</router-link></ButtonCustom>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ButtonCustom from '../components/Button.vue'
export default {
  name: 'Header',
  components: { ButtonCustom },
  data() {
    return {}
  },
  methods: {
    menuInit() {
      document.documentElement.classList.toggle('menu-open')
    }
  }
}
</script>
