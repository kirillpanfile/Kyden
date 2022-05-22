<template>
  <div
    class="checkout"
    :class="{
      open: open,
    }"
  >
    <div class="overlay" ref="overlay"></div>
    <div class="checkout-header">
      <div class="checkout-header-title">
        <h1>✔ Checkout</h1>
        <button @click="$emit('closeChekout')">✖</button>
      </div>
      <div class="checkout-header-cart">
        <div v-for="(item, index) in cart" :key="index">
          <div class="checkout-item__block">
            <div class="checkout-item__image">
              <img
                :src="`/src/assets/Products/${item.image}`"
                :alt="item.name"
              />
            </div>
            <div class="checkout-item__content">
              <div class="checkout-item__title">
                <router-link
                  :to="{
                    path: '/product/' + item.id,
                    query: {
                      productName: item.name,
                    },
                  }"
                >
                  Name : {{ item.name }}
                </router-link>
              </div>
              <div class="checkout-item__variant">
                <p>Size: {{ item.size }}</p>
              </div>
              <div class="checkout-item__price">
                <p>Price : {{ item.price }}</p>
              </div>
              <div class="checkout-item__price">
                <p>Quantity : {{ item.count }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="checkout-body">
      <div class="checkout-body-left">
        <div class="checkout-body-left-title">
          <h2>Shipping Address</h2>
        </div>
        <div class="checkout-body-left-form">
          <div class="checkout-body-left-form-input">
            <label for="firstName">First Name</label>
            <input type="text" id="firstName" v-model="firstName" />
          </div>
          <div class="checkout-body-left-form-input">
            <label for="lastName">Last Name</label>
            <input type="text" id="lastName" v-model="lastName" />
          </div>
          <div class="checkout-body-left-form-input">
            <label for="address">Address</label>
            <input type="text" id="address" v-model="address" />
          </div>
          <div class="checkout-body-left-form-input">
            <label for="city">City</label>
            <input type="text" id="city" v-model="city" />
          </div>
          <div class="checkout-body-left-form-input">
            <label for="state">State</label>
            <input type="text" id="state" v-model="state" />
          </div>
          <div class="checkout-body-left-form-input">
            <label for="zip"
              >Zip
              <span class="checkout-body-left-form-input-required">*</span>
            </label>
            <input type="text" id="zip" v-model="zip" />
          </div>
        </div>
      </div>
      <div class="checkout__credit">
        <div class="checkout-body-left-title">
          <h2>Payment</h2>
        </div>
        <div class="checkout-body-left-form">
          <div class="checkout-body-left-form-input">
            <label for="creditCard">Credit Card</label>
            <input type="text" id="creditCard" v-model="creditCard" />
          </div>
          <div class="checkout-body-left-form-input">
            <label for="expiration">Expiration</label>
            <input type="text" id="expiration" v-model="expiration" />
          </div>
          <div class="checkout-body-left-form-input">
            <label for="cvv">CVV</label>
            <input type="text" id="cvv" v-model="cvv" />
          </div>
        </div>
      </div>
      <div class="checkout__button">
        <app-button type="primary">SUBMIT CHECKOUT</app-button>
      </div>
      <div class="checkout__ads">
        <div class="checkout-body-left-title">
          <h2>Others also bought</h2>
        </div>
        <div v-for="(item, index) in products" :key="index">
          <div class="checkout-item__block" v-if="index < 4">
            <div class="checkout-item__image">
              <img
                :src="`/src/assets/Products/${item.image}`"
                :alt="item.name"
              />
            </div>
            <div class="checkout-item__content">
              <div class="checkout-item__title">
                <router-link
                  :to="{
                    path: '/product/' + item.id,
                    query: {
                      productName: item.name,
                    },
                  }"
                >
                  Name : {{ item.name }}
                </router-link>
              </div>
              <div class="checkout-item__price">
                <p>Price : {{ item.price }}</p>
              </div>
              <router-link
                :to="{
                  path: '/product/' + item.id,
                  query: {
                    productName: item.name,
                  },
                }"
              >
                <app-button type="primary" style="margin-top: 12px"
                  >View Product</app-button
                ></router-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "my-checkout",
  data() {
    return {
      firstName: "",
      lastName: "",
      address: "",
      city: "",
      state: "",
      zip: "",
      creditCard: "",
      expiration: "",
      cvv: "",
    };
  },
  props: {
    open: {
      type: Boolean,
      required: true,
    },
  },
  computed: {
    ...mapState(["cart", "products"]),
  },
  watch: {
    open() {
      if (this.open) {
        document.body.classList.add("checkout-open");
        this.$refs.overlay.style.display = "block";
      } else {
        document.body.classList.remove("checkout-open");
        this.$refs.overlay.style.display = "none";
      }
    },
  },
};
</script>

<style lang="scss"></style>
