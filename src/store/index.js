import { createStore } from "vuex";
import axios from "axios";
export default createStore({
  state: {
    products: [],
    cart: JSON.parse(localStorage.getItem("cart")) || [],
  },
  getters: {},
  mutations: {
    SET_PRODUCTS(state, products) {
      state.products = products;
    },
    ADD_TO_CART(state, product) {
      state.cart.push(product);
    },
    ADD_TO_LOCALSTORAGE(state) {
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    REMOVE_ITEM_FROM_CART(state, index) {
      state.cart.splice(index, 1);
    }
  },
  actions: {
    async getProducts({ commit }) {
      const response = await axios.get("/api/products", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      commit("SET_PRODUCTS", response.data);
    },
    addToCart({ commit }, product) {
      commit("ADD_TO_CART", product);
    },
    addToLocalStorage({ commit }) {
      commit("ADD_TO_LOCALSTORAGE");
    },
    removeItemFromCart({ commit }, index) {
      commit("REMOVE_ITEM_FROM_CART", index);
    }
  },
  modules: {},
});
