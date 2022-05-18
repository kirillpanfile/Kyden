<template>
  <div class="cart">
    <div class="cart__container">
      <div class="cart__inner">
        <div class="cart-title" v-if="cart.length == 1">
          {{ cart.length }} ITEM IN YOUR CART FOR {{ cartPrice }}
        </div>
        <div class="cart-title" v-else>
          {{ cart.length }} ITEMS IN YOUR CART FOR {{ cartPrice }}
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
                    <div class="image__object">
                      <img
                        :src="`/src/assets/Products/${item.image}`"
                        :alt="item.name"
                      />
                    </div></div
                ></a>
              </div>
              <div class="cart-item__main">
                <div class="cart-item__description">
                  <a
                    href="/products/beforestorm-framed-poster"
                    class="cart-item__title"
                    >{{ item.name }}</a
                  >
                  <p class="cart-item__variant-title">{{ item.size }}</p>
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
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "cart",
  computed: {
    cart() {
      return this.$store.state.cart;
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
