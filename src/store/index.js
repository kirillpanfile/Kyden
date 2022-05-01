import { createStore } from "vuex";
import axios from "axios";
export default createStore({
  state: {
    products: [],
  },
  getters: {},
  mutations: {
    SET_PRODUCTS(state, products) {
      state.products = products;
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
      commit("SET_PRODUCTS", response);
    },
  },
  modules: {},
});
