import Vue from 'vue';
import Vuex from 'vuex';
import restaurants from './modules/restaurants';
import food from './modules/food';
import user from './modules/user';

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
    user,
  },
});
