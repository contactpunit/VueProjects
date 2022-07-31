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
  async created() {
    this.allCountries = await this.$store.getters.getCountries;
  },
  methods: {
    optionSelected() {
      // console.log(this.selected);
    },
  },
};
</script>