<template>
  <header class="header">
    <div class="header__container">
      <div class="header__sections">
        <div class="header__sections-left">
          <div class="header__social">
            <a target="_blank" href="https://instagram.com/kydenproduct">
              <img src="../assets/twitter.svg" alt="" />
            </a>
          </div>
        </div>
        <div class="header__sections-center">
          <div class="header__logo">
            <router-link to="/"
              ><img src="../assets/LOGO-WHITE.png" alt=""
            /></router-link>
          </div>
        </div>
        <div class="header__sections-right">
          <div class="header__button">
            <router-link to="/shop">
              <app-button type="primary">SHOP</app-button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style lang="scss"></style>
