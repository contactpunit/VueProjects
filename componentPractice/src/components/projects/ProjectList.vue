<template>
  <base-card>
    <h2>Projects</h2>
    <base-search @search="searchProjects"></base-search>
    <project-item
      v-if="reqUser"
      :user="reqUser"
      :filteredProjects="filteredProjects"
    ></project-item>
    <p v-else>No user selected</p>
  </base-card>
</template>

<script>
import ProjectItem from './ProjectItem.vue';
export default {
  props: ['reqUser'],
  data() {
    return {
      filteredProjects: [],
    };
  },
  components: {
    ProjectItem,
  },
  methods: {
    searchProjects(value) {
      const projects = this.reqUser.projects.filter((proj) =>
        proj.title.includes(value)
      );
      if (projects.length) this.filteredProjects = projects;
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