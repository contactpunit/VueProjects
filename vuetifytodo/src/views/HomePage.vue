<template>
  <div class="home">
    <add-task></add-task>
    <v-list flat class="pt-0" v-if="allTasks.length">
      <div v-for="task in allTasks" :key="task.id">
        <v-list-item
          :class="{ 'blue lighten-4': task.done }"
          @click="toggleDone(task.id)"
        >
          <template #default>
            <v-list-item-action>
              <v-checkbox :input-value="task.done" color="primary"></v-checkbox>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title
                :class="{ 'text-decoration-line-through': task.done }"
              >
                {{ task.title }}
              </v-list-item-title>
            </v-list-item-content>
            <v-list-item-action>
              <v-btn icon @click.stop="deleteTask(task.id)">
                <v-icon color="primary">mdi-delete</v-icon>
              </v-btn>
            </v-list-item-action>
          </template>
        </v-list-item>
        <v-divider></v-divider>
      </div>
    </v-list>

    <div v-else class="no-tasks">
      <v-icon color="primary" size="100"> mdi-check </v-icon>
      <div class="text-h5 primary--text">Add new tasks</div>
    </div>
  </div>
</template>

<script>
import AddTask from "@/components/Todo/AddTask.vue";

export default {
  components: {
    AddTask,
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
  methods: {
    toggleDone(id) {
      this.$store.dispatch("selectChange", id);
    },
    deleteTask(id) {
      this.$store.dispatch("deleteTask", id);
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