import Vue from 'vue';
import Vuex from 'vuex';
import restaurants from './modules/restaurants';
import food from './modules/food';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    restaurants,
    food,
  },
});
