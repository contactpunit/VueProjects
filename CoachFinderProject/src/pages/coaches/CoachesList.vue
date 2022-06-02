<template>
  <section>FILTER</section>
  <section>
    <div>
      <button>Refresh</button>
      <router-link to="/register">Register</router-link>
    </div>
    <ul v-if="hasCoaches">
      <coach-item
        v-for="coach in filteredCoaches"
        :key="coach.id"
        :id="coach.id"
        :firstName="coach.firstName"
        :lastName="coach.lastName"
        :areas="coach.areas"
        :rate="coach.hourlyRate"
      ></coach-item>
    </ul>
    <h3 v-else>No coaches found</h3>
  </section>
</template>

<script>
import CoachItem from './CoachItem.vue';

export default {
  components: {
    CoachItem,
  },
  computed: {
    filteredCoaches() {
      return this.$store.getters['coaches/getCoaches'];
    },
    hasCoaches() {
      return this.$store.getters['coaches/hasCoaches'];
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

.controls {
  display: flex;
  justify-content: space-between;
}
</style>