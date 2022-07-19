<template>
  <h3>{{ user.fullName }}</h3>
  <ul v-for="project in displayProjects" :key="project.id">
    <li>{{ project.title }}</li>
  </ul>
</template>

<script>
export default {
  props: ['user', 'filteredProjects'],
  data() {
    return {
      projects: [],
    };
  },
  computed: {
    displayProjects() {
      if (this.filteredProjects.length) {
        return this.filteredProjects;
      } else {
        return this.user.projects;
      }
    },
  },
};
</script>

<style scoped>
li {
  background-color: #00006b;
  color: white;
  padding: 0.5rem;
  margin: 1rem 0;
}

li h3 {
  margin: 0;
}
</style>