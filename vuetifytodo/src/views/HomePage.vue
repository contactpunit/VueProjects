<template>
  <div class="home">
    <v-text-field
      v-model="newTask"
      @click:append="addTask"
      @keyup.enter="addTask"
      class="pa-3"
      outlined
      hide-details
      clearable
      label="Add Task"
      append-icon="mdi-plus"
    ></v-text-field>
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
  </div>
</template>

<script>
export default {
  created() {
    if (!this.tasks.length) this.newId = 1;
    else {
      const sorted = this.tasks.map((task) => task.id).sort((a, b) => b - a);
      this.newId = +sorted[0] + 1;
    }
  },
  data() {
    return {
      newTask: null,
      newId: 0,
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
    deleteTask(id) {
      const indexId = this.tasks.findIndex((task) => task.id === id);
      this.tasks.splice(indexId, 1);
    },
    addTask() {
      this.tasks.push({
        id: this.newId,
        title: this.newTask,
        done: false,
      });
      this.newId += 1;
      this.newTask = null;
    },
  },
};
</script>