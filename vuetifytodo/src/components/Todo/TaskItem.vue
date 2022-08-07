<template>
  <div>
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
    <base-dialog></base-dialog>
  </div>
</template>

<script>
import BaseDialog from "../UI/BaseDialog.vue";

export default {
  components: {
    BaseDialog,
  },
  props: ["task"],
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