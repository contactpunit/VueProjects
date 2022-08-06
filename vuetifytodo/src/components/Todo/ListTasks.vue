<template>
  <v-list flat class="pt-0">
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
</template>

<script>
export default {
  computed: {
    allTasks() {
      return this.$store.getters.getAllTasks;
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

<style>
</style>