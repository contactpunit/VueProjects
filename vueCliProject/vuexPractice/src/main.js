import { createApp } from 'vue';
import { createStore } from 'vuex';

import App from './App.vue';

const store = createStore({
  state() {
    return {
      counter: 0,
      isLoggedIn: false,
    };
  },
  mutations: {
    increment(state) {
      state.counter++;
    },
    increase(state, payload) {
      state.counter = state.counter + payload.value;
    },
    login(state) {
      state.isLoggedIn = true;
    },
    logout(state) {
      state.isLoggedIn = false;
    },
  },
  getters: {
    finalCounter(state) {
      return state.counter * 5;
    },
    normalizedCounter(state, getters) {
      const updated = getters.finalCounter;
      if (updated < 0) return 0;
      else if (updated > 100) return 100;
      else return updated;
    },
    isAuthenticated(state) {
      return state.isLoggedIn;
    },
  },
  actions: {
    increase(context, payload) {
      setTimeout(() => {
        context.commit('increase', payload);
      }, 2000);
    },
    logMeIn(context) {
      context.commit('login');
    },
    logMeOut(context) {
      context.commit('logout');
    },
  },
});

const app = createApp(App);
app.use(store);

app.mount('#app');
