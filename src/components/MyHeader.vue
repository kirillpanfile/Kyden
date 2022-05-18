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
            <router-link to="/cart">
              <svg
                width="18"
                height="16"
                viewBox="0 0 18 16"
                fill="#fff"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.875 6.5H13.875L9.5475 0.725C9.49432 0.655979 9.42622 0.599885 9.34829 0.56092C9.27036 0.521955 9.18462 0.501128 9.0975 0.5H8.9025C8.81538 0.501128 8.72964 0.521955 8.65171 0.56092C8.57378 0.599885 8.50568 0.655979 8.4525 0.725L4.125 6.5H1.125C1.02554 6.5 0.930161 6.53951 0.859835 6.60983C0.789509 6.68016 0.75 6.77554 0.75 6.875V7.625C0.75 7.72446 0.789509 7.81984 0.859835 7.89017C0.930161 7.96049 1.02554 8 1.125 8H1.5L2.7825 13.7375C2.89232 14.2325 3.16615 14.676 3.55958 14.9959C3.95301 15.3158 4.44296 15.4934 4.95 15.5H13.05C13.5609 15.4985 14.0561 15.3232 14.4541 15.0029C14.8522 14.6825 15.1293 14.2363 15.24 13.7375L16.5 8H16.8525C16.952 8 17.0473 7.96049 17.1177 7.89017C17.188 7.81984 17.2275 7.72446 17.2275 7.625V6.875C17.2277 6.77932 17.1913 6.6872 17.1257 6.61748C17.0602 6.54777 16.9705 6.50574 16.875 6.5ZM6 6.5L9 2.5025L12 6.5H6Z"
                ></path></svg
            ></router-link>
          </div>
          <div class="header__button md-dez">
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
export default {
  name: "my-header",
};
</script>

<style lang="scss"></style>
