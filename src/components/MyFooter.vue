<template>
  <footer class="footer">
    <div class="footer-wrapper footer__container">
      <div class="footer-wrapper__col footer-col">
        <div class="footer-col__title">JOIN THE NEWSLETTER</div>
        <form class="footer-form" action="" @submit.prevent>
          <input
            class="footer-form__input"
            type="text"
            placeholder="Your Email"
          />
          <button type="submit" class="footer-form__button">SUBSCRIBE</button>
        </form>
      </div>
      <div class="footer-wrapper__col footer-col">
        <div class="footer-col__title">FIND ME ON SOCIAL MEDIA</div>
        <div class="footer__data">
          <a href="">
            <img src="../assets/twitter.svg" alt="" />
          </a>
        </div>
      </div>
      <div class="footer-wrapper__col footer-col">
        <div class="footer-col__title">NEED HELP ?</div>
        <div class="footer__data">
          <a href="mailto:kirillpanfile@gmail.com">Contact us</a>
          <a href="">Privacy Policy</a>
          <span>©2022</span>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "my-footer",
};
</script>

<style></style>
