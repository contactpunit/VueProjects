import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      countries: [],
    };
  },
  getters: {
    async getCountries(state) {
      if (state.countries.length) return state.countries;
      const localData = localStorage.getItem('countries');
      let allCountries = JSON.parse(localData);
      if (allCountries && allCountries.length) return allCountries;
      console.log('i am invoked');
      const response = await fetch('https://api.covid19api.com/countries', {
        method: 'GET',
      });
      const data = await response.json();
      if (response.ok) {
        allCountries = data;
        localStorage.setItem('countries', JSON.stringify(allCountries));
        state.countries = allCountries;
        return allCountries;
      }
      return [];
    },
  },
  actions: {},
  mutations: {},
});

export default store;
