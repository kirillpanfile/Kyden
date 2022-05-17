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
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
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
    }
  },
  modules: {},
});
