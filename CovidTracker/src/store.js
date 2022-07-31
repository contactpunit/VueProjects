import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      countries: [],
    };
  },
  getters: {
    getCountries(state) {
      return state.countries;
    },
  },
  actions: {
    async setCountries({ commit, getters }) {
      const countries = getters.getCountries;
      if (!countries || !countries.length) {
        const localData = localStorage.getItem('countries');
        if (localData && JSON.parse(localData).length) {
          commit('setCountries', JSON.parse(localData));
        } else {
          const response = await fetch('https://api.covid19api.com/summary', {
            method: 'GET',
          });
          const data = await response.json();
          if (response.ok) {
            const allCountries = data.Countries;
            localStorage.setItem('countries', JSON.stringify(allCountries));
            commit('setCountries', allCountries);
          }
        }
      }
    },
  },
  mutations: {
    setCountries(state, payload) {
      state.countries = payload;
    },
  },
});

export default store;
