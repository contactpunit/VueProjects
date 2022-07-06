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
        firstName: data.firstname.value,
        lastName: data.lastname.value,
        hourlyRate: data.rate.value,
        description: data.description.value,
        areas: Object.values(data.areas.value),
      });
      this.$router.replace('/coaches');
    },
  },
};
</script>