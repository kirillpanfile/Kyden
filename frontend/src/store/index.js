import { createStore } from 'vuex'
import Api from '../services/api'
export default createStore({
  state: {
    clothes: []
  },
  mutations: {
    SET_CLOTHES(state, clothes) {
      state.clothes = clothes
    }
  },
  actions: {
    async loadClothes({ commit }) {
      let response = await Api().get('/cloths')
      let clothes = response.data.data
      console.log(clothes)
      commit(
        'SET_CLOTHES',
        clothes.map((el) => el.attributes)
      )
    }
  },
  modules: {},
  getters: {}
})
