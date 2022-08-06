<template>
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
</template>

<script>
export default {
  data() {
    return {
      newTask: "",
    };
  },
  methods: {
    addTask() {
      this.$store.dispatch("addTask", {
        id: this.$store.getters.getNewId,
        title: this.newTask,
        done: false,
      });
      this.$store.dispatch("appendId");
      this.newTask = null;
    },
  },
};
</script>

<style>
</style>