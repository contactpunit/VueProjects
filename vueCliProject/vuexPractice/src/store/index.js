import { createStore } from 'vuex';
import rootMutations from './mutations.js';
import rootGetters from './getters.js';
import rootActions from './actions.js';
import counterModule from './counters/index.js';

const store = createStore({
  modules: {
    counters: counterModule,
  },
  state() {
    return {
      isLoggedIn: false,
    };
  },
  mutations: rootMutations,
  getters: rootGetters,
  actions: rootActions,
});

export default store;
