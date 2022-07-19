<template>
  <base-card>
    <h3>{{ fullName }}</h3>
    <button @click="viewProjects(id)">View Projects</button>
  </base-card>
</template>

<script>
import BaseCard from '../ui/BaseCard.vue';
export default {
  components: {
    BaseCard,
  },
  props: ['fullName', 'projects', 'id'],
  inject: ['viewProjects'],
};
</script>

<style scoped>
li {
  margin: 0.5rem 0;
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.26);
  border: 1px solid #ccc;
}

li h3 {
  margin: 0;
}
</style>