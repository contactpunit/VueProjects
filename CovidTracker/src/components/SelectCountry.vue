<template>
  <select v-model="selected" @change="optionSelected">
    <option value="0">Select Country</option>
    <option
      v-for="country in allCountries"
      :key="country.Slug"
      :value="country.ISO2"
    >
      {{ country.Country }}
    </option>
  </select>
</template>

<script>
export default {
  data() {
    return {
      selected: 0,
      allCountries: [],
    };
  },
  //   async created() {
  //     const response = await fetch('https://api.covid19api.com/countries', {
  //       method: 'GET',
  //     });
  //     const data = await response.json();
  //     if (response.ok) {
  //       this.allCountries = data;
  //     }
  //   },
  methods: {
    optionSelected() {
      console.log(this.selected);
    },
  },
};
</script>