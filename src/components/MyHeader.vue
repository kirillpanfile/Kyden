<template>
  <header class="header">
    <div class="container wrapper">
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
            <img src="../assets/LOGO-WHITE.png" alt="" />
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

<style lang="scss">
.header {
  display: flex;
  position: relative;
  z-index: 1;
  align-items: center;
  height: 100px;
  background-color: rgba(0, 0, 0, 0);
  font-size: 0.875rem;
  &__sections {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 0px 20px;
  }
  &__social {
    display: flex;
    justify-content: center;
    align-items: center;
    a img {
      display: block;
      width: 80%;
    }
  }
  &__sections-center {
    text-align: center;
    img {
      width: 40%;
    }
  }
  &__sections-left {
    width: 80px;
    display: flex;
    flex: 0 auto;
  }
  &__sections-right {
    width: 80px;
    flex: 0 0 0 auto;
  }
}
</style>
