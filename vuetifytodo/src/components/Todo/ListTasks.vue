<template>
  <v-list flat class="pt-0">
    <task-item v-for="task in allTasks" :key="task.id" :task="task"></task-item>
  </v-list>
</template>

<script>
import TaskItem from "./TaskItem.vue";
export default {
  components: {
    TaskItem,
  },
  computed: {
    allTasks() {
      return this.$store.getters.getAllTasks;
    },
  },
};
</script>