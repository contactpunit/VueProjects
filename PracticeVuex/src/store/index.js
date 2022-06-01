import { createStore } from 'vuex';

import productsModule from './modules/products.js';
import cartModule from './modules/cart.js';

const store = createStore({
  modules: {
    prod: productsModule,
    cart: cartModule,
  },
  state() {
    return {
      isLoggedIn: false,
    };
  },
  mutations: {
    login(state) {
      state.isLoggedIn = true;
    },
    logout(state) {
      state.isLoggedIn = false;
    },
  },
  actions: {
    performLogin(context) {
      context.commit('login');
    },
    performLogout(context) {
      context.commit('logout');
    },
  },
  getters: {
    loginStatus(state) {
      return state.isLoggedIn;
    },
  },
});

export default store;
