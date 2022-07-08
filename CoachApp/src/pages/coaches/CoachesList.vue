<template>
  <base-dialog :show="!!error" title="An error occured" @close="closeDialog">
    <p>{{ error }}</p>
  </base-dialog>
  <section>
    <coach-filter @changeFilter="filterCoaches"></coach-filter>
  </section>
  <section>
    <base-card>
      <div class="controls">
        <base-button mode="outline" @click="loadCoaches(true)"
          >Refresh</base-button
        >
        <base-button link to="/register" v-if="!isCoach && !isLoading"
          >Register</base-button
        >
      </div>
      <div v-if="isLoading">
        <base-spinner></base-spinner>
      </div>
      <ul v-else-if="hasCoaches">
        <coach-item
          v-for="coach in filteredCoaches"
          :key="coach.id"
          :firstName="coach.firstName"
          :lastName="coach.lastName"
          :id="coach.id"
          :rate="coach.hourlyRate"
          :areas="coach.areas"
        ></coach-item>
      </ul>
      <h3 v-else>No coaches found</h3>
    </base-card>
  </section>
</template>

<script>
import CoachItem from '../../components/coaches/CoachItem.vue';
import CoachFilter from '../../components/coaches/CoachFilter.vue';

export default {
  components: {
    CoachItem,
    CoachFilter,
  },
  data() {
    return {
      error: null,
      isLoading: false,
      activeFilters: {
        backend: true,
        frontend: true,
        career: true,
      },
    };
  },
  created() {
    this.loadCoaches();
  },
  computed: {
    isCoach() {
      return this.$store.getters['coaches/isCoach'];
    },
    filteredCoaches() {
      const allCoaches = this.$store.getters['coaches/coaches'];
      return allCoaches.filter((coach) => {
        if (this.activeFilters.frontend && coach.areas.includes('frontend'))
          return true;
        if (this.activeFilters.backend && coach.areas.includes('backend'))
          return true;
        if (this.activeFilters.career && coach.areas.includes('career'))
          return true;
        return false;
      });
    },
    hasCoaches() {
      return !this.isLoading && this.$store.getters['coaches/hasCoaches'];
    },
  },
  methods: {
    closeDialog() {
      this.error = null;
    },
    filterCoaches(filters) {
      this.activeFilters = filters;
    },
    async loadCoaches(refresh = false) {
      this.isLoading = true;
      try {
        await this.$store.dispatch('coaches/loadCoaches', {
          forceRefresh: refresh,
        });
      } catch (err) {
        this.error = err.message || 'Something went wrong!!';
      }
      this.isLoading = false;
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