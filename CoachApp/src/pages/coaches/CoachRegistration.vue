<template>
  <section>
    <base-card>
      <h2>Register as a Coach</h2>
      <coach-form @submit-data="saveData"></coach-form>
    </base-card>
  </section>
</template>

<script>
import CoachForm from '../../components/coaches/CoachForm.vue';
export default {
  components: {
    CoachForm,
  },
  methods: {
    saveData(data) {
      this.$store.dispatch('coaches/addCoach', {
        firstName: data.firstname,
        lastName: data.lastname,
        hourlyRate: data.rate,
        description: data.description,
        areas: Object.values(data.areas),
      });
      this.$router.replace('/coaches');
    },
  },
};
</script>