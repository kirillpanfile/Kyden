<template>
  <footer class="footer">
    <div class="footer-wrapper">
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
        <div class="footer-col__help">
          <a href="mailto:kirillpanfile@gmail.com">Contact us</a>
          <a href="">Privacy Policy</a>
          <br />
          <span>Kyden © 2022</span>
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
