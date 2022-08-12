<template>
  <draggable :list="$store.getters.getAllTasks" handle=".handle">
    <v-list flat class="pt-0">
      <task-item
        v-for="task in allTasks"
        :key="task.id"
        :task="task"
      ></task-item>
    </v-list>
  </draggable>
</template>

<script>
import TaskItem from "./TaskItem.vue";
import draggable from "vuedraggable";

export default {
  components: {
    TaskItem,
    draggable,
  },
  computed: {
    allTasks() {
      return this.$store.getters.getAllTasks;
    },
  },
};
</script>