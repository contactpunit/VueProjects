<template>
  <v-list flat class="pt-0">
    <div v-for="task in tasks" :key="task.id">
      <v-list-item
        :class="{ 'blue lighten-4': task.done }"
        @click="selectChange(task.id)"
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
        </template>
      </v-list-item>
      <v-divider></v-divider>
    </div>
  </v-list>
</template>

<script>
import { consoleError } from "vuetify/lib/util/console";

export default {
  data() {
    return {
      tasks: [
        {
          id: 1,
          title: "Learn Vue!",
          done: false,
        },
        {
          id: 2,
          title: "Master Vue!",
          done: false,
        },
        {
          id: 3,
          title: "Learn Vuetify!",
          done: false,
        },
        {
          id: 4,
          title: "Master Nodejs",
          done: false,
        },
      ],
    };
  },
  methods: {
    selectChange(id) {
      const selectedTask = this.tasks.find((task) => task.id === id);
      selectedTask.done = !selectedTask.done;
    },
  },
};
</script>