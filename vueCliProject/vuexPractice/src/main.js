import { createApp } from 'vue';
import { createStore } from 'vuex';

import App from './App.vue';

const store = createStore({
  state() {
    return {
      counter: 0,
    };
  },
  mutations: {
    increment(state) {
      state.counter++;
    },
    increase(state, payload) {
      state.counter = state.counter + payload.value;
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
  },
});

const app = createApp(App);
app.use(store);

app.mount('#app');
