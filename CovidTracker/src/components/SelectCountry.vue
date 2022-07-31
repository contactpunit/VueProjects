<template>
  <select v-model="selected" @change="optionSelected">
    <option value="country.Slug">Select Country</option>
    <option
      v-for="country in allCountries"
      :key="country.ID"
      :value="country.Country"
    >
      {{ country.Slug }}
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
    await this.$store.dispatch('setCountries');
    this.allCountries = this.$store.getters.getCountries;
  },
  methods: {
    optionSelected() {
      console.log(this.selected);
    },
  },
};
</script>