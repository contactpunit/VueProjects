<template>
  <div class="home">
    <add-task></add-task>

    <list-tasks v-if="allTasks.length"></list-tasks>
    <no-tasks v-else></no-tasks>
    <basesorting-button v-if="$store.getters.doSort"></basesorting-button>
  </div>
</template>

<script>
import AddTask from "@/components/Todo/AddTask.vue";
import ListTasks from "@/components/Todo/ListTasks.vue";
import NoTasks from "@/components/Todo/NoTasks.vue";
import BasesortingButton from "@/components/UI/BasesortingButton.vue";

export default {
  components: {
    AddTask,
    ListTasks,
    NoTasks,
    BasesortingButton,
  },
  async created() {
    await this.$store.dispatch("setDbTasks");
    const tasks = await this.allTasks;
    if (!tasks.length) {
      await this.$store.dispatch("setNewIdValue", 1);
    } else {
      const sorted = tasks.map((task) => task.id).sort((a, b) => b - a);
      const newValue = +sorted[0] + 1;
      await this.$store.dispatch("setNewIdValue", newValue);
    }
  },
  computed: {
    allTasks() {
      return this.$store.state.tasks;
    },
  },
};
</script>