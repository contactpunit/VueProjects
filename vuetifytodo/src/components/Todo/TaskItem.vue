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
        <v-list-item-action v-if="task.dueDate">
          <v-list-item-action-text>
            <v-icon small>mdi-calendar</v-icon>
            {{ task.dueDate | niceDate }}
          </v-list-item-action-text>
        </v-list-item-action>
        <v-list-item-action>
          <base-menu :task="task"></base-menu>
        </v-list-item-action>
      </template>
    </v-list-item>
    <v-divider></v-divider>
  </div>
</template>

<script>
import BaseDialog from "../UI/BaseDialog.vue";
import BaseMenu from "../UI/BaseMenu.vue";

import { format } from "date-fns";

export default {
  filters: {
    niceDate(value) {
      return format(new Date(value), "MMM do");
    },
  },
  components: {
    BaseDialog,
    BaseMenu,
  },
  provide() {
    return {
      deleteTask(id) {
        this.$store.dispatch("deleteTask", id);
      },
    };
  },
  props: ["task"],
  methods: {
    toggleDone(id) {
      this.$store.dispatch("selectChange", id);
    },
  },
};
</script>