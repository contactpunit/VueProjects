<template>
  <base-card>
    <h2>Projects</h2>
    <base-search></base-search>
    <project-item v-if="reqUser" :user="reqUser"></project-item>
    <p v-else>No user selected</p>
  </base-card>
</template>

<script>
import BaseCard from '../ui/BaseCard.vue';
import BaseSearch from '../ui/BaseSearch.vue';
import ProjectItem from './ProjectItem.vue';
export default {
  props: ['reqUser'],
  components: {
    BaseCard,
    BaseSearch,
    ProjectItem,
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