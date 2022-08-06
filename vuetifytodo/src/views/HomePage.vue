<template>
  <div class="home">
    <add-task></add-task>

    <list-tasks v-if="allTasks.length"></list-tasks>
    <div v-else class="no-tasks">
      <v-icon color="primary" size="100"> mdi-check </v-icon>
      <div class="text-h5 primary--text">Add new tasks</div>
    </div>
  </div>
</template>

<script>
import AddTask from "@/components/Todo/AddTask.vue";
import ListTasks from "@/components/Todo/ListTasks.vue";

export default {
  components: {
    AddTask,
    ListTasks,
  },
  created() {
    if (!this.allTasks.length) this.$store.dispatch("setNewIdValue", 1);
    else {
      const sorted = this.allTasks.map((task) => task.id).sort((a, b) => b - a);
      const newValue = +sorted[0] + 1;
      this.$store.dispatch("setNewIdValue", newValue);
    }
  },
  computed: {
    allTasks() {
      return this.$store.state.tasks;
    },
  },
};
</script>

<style lang="sass" scoped>
.no-tasks
  position: absolute
  left: 50%
  top: 50%
  transform: translate(-50%, -50%)
  opacity: 0.5
</style>