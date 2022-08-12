<template>
  <v-text-field
    v-model="newTask"
    @keyup.enter="addTask"
    class="pa-3"
    outlined
    hide-details
    clearable
    label="Add Task"
    append-icon="mdi-plus"
  >
    <template v-slot:append>
      <v-icon @click="addTask" color="primary" :disabled="!newTask"
        >mdi-plus</v-icon
      >
    </template>
  </v-text-field>
</template>

<script>
export default {
  data() {
    return {
      newTask: "",
    };
  },
  computed: {
    isValid() {
      if (
        this.newTask === "" ||
        this.newTask === undefined ||
        this.newTask === null
      )
        return false;
      else return true;
    },
  },
  methods: {
    async addTask() {
      if (this.isValid) {
        const task = {
          id: this.$store.getters.getNewId,
          title: this.newTask,
          done: false,
          dueDate: null,
        };
        await this.$store.dispatch("addTask", task);
        this.$store.dispatch("appendId");
        this.newTask = null;
      }
    },
  },
};
</script>