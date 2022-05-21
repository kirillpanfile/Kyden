<template>
  <div class="cart">
    <div class="cart__container">
      <div class="cart__inner" v-if="cart.length">
        <div class="cart-title" v-if="cart.length == 1">
          {{ cart.length }} ITEM IN YOUR CART FOR {{ cartPrice }}
        </div>
        <div class="cart-title" v-else>
          {{ cart.length }} ITEMS IN YOUR CART FOR ${{ cartPrice }}
        </div>
        <div class="cart__content">
          <div class="cart__items-header">
            <div class="cart-items-header">
              <div class="cart-items-header__item">Item</div>
              <div class="cart-items-header__quantity">Quantity</div>
              <div class="cart-items-header__price">Price</div>
              <div class="cart-items-header__remove"></div>
            </div>
          </div>
          <div class="cart__items" v-for="(item, index) in cart" :key="index">
            <div class="cart-item">
              <div class="cart-item__image">
                <a href="3" class="cart-item__image-link"
                  ><div class="image">
                    <router-link
                      :to="{
                        path: '/product/' + item.id,
                        query: {
                          productName: item.name,
                        },
                      }"
                    >
                      <div class="image__object">
                        <img
                          :src="`/src/assets/Products/${item.image}`"
                          :alt="item.name"
                        />
                      </div>
                    </router-link></div
                ></a>
              </div>
              <div class="cart-item__main">
                <div class="cart-item__description">
                  <router-link
                    :to="{
                      path: '/product/' + item.id,
                      query: {
                        productName: item.name,
                      },
                    }"
                    class="cart-item__title"
                    >Product: {{ item.name }}</router-link
                  >
                  <p class="cart-item__variant-title">Size : {{ item.size }}</p>
                </div>
                <div class="cart-item__price">
                  <p class="cart-item__price-value">{{ item.price }}</p>
                </div>
                <div class="cart-item__quantity">
                  <div
                    class="select-field select-field--quantity select-field--transparent select-field--base select-field--cart-item"
                  >
                    <select v-model="item.count" class="select-field__select">
                      <option id="1" value="1">1</option>
                      <option id="2" value="2">2</option>
                      <option id="3" value="3">3</option>
                      <option id="4" value="4">4</option>
                      <option id="5" value="5">5</option>
                    </select>
                    <div class="select-field__dropdown-icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="#fff"
                          d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div class="cart-item__remove">
                <button
                  class="cart-item__remove-button"
                  @click="removeItemFromCart(index)"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 7L1.27 1.27 7 7l5.73-5.73L7 7zm0 0l5.73 5.73L7 7l-5.73 5.73L7 7z"
                      stroke="currentColor"
                      stroke-width="2"
                      fill="none"
                      fill-rule="evenodd"
                      stroke-linecap="square"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="cart__footer">
          <div class="cart-footer">
            <div class="cart-footer__cta-container">
              <div class="cart-footer__totals">
                <div class="cart-totals">
                  <div class="cart-totals__item cart-totals__item--subtotal">
                    <div class="cart-totals__label">
                      <span class="cart-totals__subtotal">Subtotal</span>
                    </div>
                    <div
                      class="cart-totals__amount cart-totals__amount--subtotal"
                    >
                      ${{ cartPrice }}
                    </div>
                  </div>
                </div>
              </div>
              <div class="cart-footer__cta">
                <div class="cart-footer__checkout">
                  <form class="cart-footer__checkout-form">
                    <a>
                      <app-button type="primary"> Checkout </app-button>
                    </a>
                  </form>
                </div>
              </div>
            </div>
            <div class="cart-footer__continue">
              <router-link to="/shop">
                <app-button type="skelet"
                  >Back to Shopping
                </app-button></router-link
              >
            </div>
          </div>
        </div>
      </div>
      <div
        class="cart__inner"
        v-else
        style="padding-top: 110px; padding-bottom: 110px; text-align: center"
      >
        <div class="cart-title" style="font-size: 1.9rem">
          YOUR SHOPPING CART IS EMPTY
        </div>
        <router-link to="/shop">
          <app-button
            type="primary"
            style="padding: 26px 70px; font-size: 1rem"
          >
            Start Shopping</app-button
          >
        </router-link>
      </div>
    </div>
    <div class="featured-section">
      <div class="featured__container featured-section__wrapper">
        <div class="featured__data">
          <h1 class="featured__title">YOU MAY ALSO LIKE</h1>
        </div>
        <div class="featured-row">
          <div v-for="item in products" :key="item.id">
            <product
              :image="item.image"
              :name="item.name"
              :price="item.price"
              :id="item.id"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import product from "/src/components/myProduct.vue";
export default {
  name: "cart",
  components: {
    product,
  },
  computed: {
    cart() {
      return this.$store.state.cart;
    },
    products() {
      try {
        let tmp = this.$store.state.products;
        return Object.values(tmp)
          .map((el) => (el = JSON.parse(JSON.stringify(el))))
          .sort((a, b) => b.stars - a.stars)
          .slice(0, 4);
      } catch (error) {
        console.table(error);
      }
    },
    cartPrice() {
      let price = 0;
      this.cart.forEach((item) => {
        price += Number(item.price.replace(/[$]/, "")) * item.count;
      });
      return price.toFixed(2);
    },
  },
  methods: {
    removeItemFromCart(index) {
      this.$store.dispatch("removeItemFromCart", index);
    },
  },
};
</script>

<style></style>
