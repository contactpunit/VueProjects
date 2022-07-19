<template>
  <h3>{{ user.fullName }}</h3>
  <ul v-for="project in user.projects" :key="project.id">
    <li>{{ project.title }}</li>
  </ul>
</template>

<script>
export default {
  props: ['user'],
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