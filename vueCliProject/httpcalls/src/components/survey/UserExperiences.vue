<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click="getRecords"
          >Load Submitted Experiences</base-button
        >
      </div>
      <p v-if="isLoading">Please wait for data to load ....</p>
      <p v-else-if="apiError">Unable to fetch the data</p>
      <p v-else-if="!isLoading && records && records.length === 0">
        No survey data found
      </p>
      <ul v-else>
        <survey-result
          v-for="record in records"
          :key="record.id"
          :name="record.name"
          :rating="record.rating"
        ></survey-result>
      </ul>
    </base-card>
  </section>
</template>

<script>
import SurveyResult from './SurveyResult.vue';

export default {
  components: {
    SurveyResult,
  },
  data() {
    return {
      records: [],
      isLoading: false,
      apiError: false,
    };
  },
  mounted() {
    this.getRecords();
  },
  methods: {
    getRecords() {
      this.isLoading = true;
      this.apiError = false;
      fetch('https://vue-demo-deb48-default-rtdb.firebaseio.com/survey.json', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((resp) => {
          if (resp.ok) {
            return resp.json();
          }
        })
        .then((data) => {
          this.isLoading = false;
          for (const d in data) {
            this.records.push({
              id: d,
              name: data[d].name,
              rating: data[d].rating,
            });
          }
        })
        .catch(() => {
          this.isLoading = false;
          this.apiError = true;
        });
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>