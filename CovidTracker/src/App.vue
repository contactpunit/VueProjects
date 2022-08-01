<template>
  <header>
    <h2>Covid-19 Tracker</h2>
  </header>
  <div>
    <section class="topic">
      <strong>Global</strong>
      <div>
        {{ currentDate }}
      </div>
    </section>
  </div>
  <display-data
    :newDeaths="newDeaths"
    :newCases="newCases"
    :totalCases="totalCases"
    :totalDeaths="totalDeaths"
  ></display-data>
  <div>
    <select-country @ctry-select="setCountryValues($event)"></select-country>
  </div>
</template>

<script>
import SelectCountry from './components/SelectCountry.vue';
import DisplayData from './components/DisplayData.vue';

export default {
  components: {
    SelectCountry,
    DisplayData,
  },
  data() {
    return {
      newDeaths: '',
      totalDeaths: '',
      newCases: '',
      totalCases: '',
    };
  },
  computed: {
    currentDate() {
      return new Date().toUTCString();
    },
  },
  methods: {
    setCountryValues(countryName) {
      const storeData = this.$store.getters.getCountries;
      const allCountries = storeData;
      if (allCountries.length) {
        const matchCountry = allCountries.find(
          (ctry) => ctry.Country === countryName
        );
        if (matchCountry) {
          this.totalCases = matchCountry.TotalConfirmed;
          this.totalDeaths = matchCountry.TotalDeaths;
          this.newCases = matchCountry.NewConfirmed;
          this.newDeaths = matchCountry.NewDeaths;
        }
      }
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

header {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 0.5rem;
  background-color: #1415b4;
  color: white;
  text-align: center;
  margin-bottom: 2rem;
}

.topic {
  color: black;
  text-align: center;
  font: 500;
}

h2 {
  font-weight: 700;
  font-size: 28px;
  text-align: center;
  display: block;
  font-size: 2em;
  margin-block-start: 0.67em;
  margin-block-end: 0.67em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
}

div {
  margin: 0.5rem 0;
}

body {
  margin: 0;
  text-align: center;
}

.container {
  margin: 3rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  text-align: center;
}

.cases {
  background-color: #d5d5ea;
}

.deaths {
  background-color: #878799;
}
</style>