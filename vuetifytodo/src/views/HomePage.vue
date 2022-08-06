<template>
  <div class="home">
    <add-task></add-task>

    <list-tasks v-if="allTasks.length"></list-tasks>
    <no-tasks v-else></no-tasks>
  </div>
</template>

<script>
import AddTask from "@/components/Todo/AddTask.vue";
import ListTasks from "@/components/Todo/ListTasks.vue";
import NoTasks from "@/components/Todo/NoTasks.vue";

export default {
  components: {
    AddTask,
    ListTasks,
    NoTasks,
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