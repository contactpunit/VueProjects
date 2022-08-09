<template>
  <v-dialog :value="dialogProp.dialogShow" persistent max-width="290">
    <v-card>
      <v-card-title class="text-h5">
        {{ dialogProp.dialogTitle }}
      </v-card-title>
      <v-card-text v-if="dialogProp.type === 'confirm'">{{
        dialogProp.dialogText
      }}</v-card-text>
      <v-card-text v-if="dialogProp.type === 'input'">
        {{ dialogProp.dialogText }}
        <v-text-field
          v-model="taskTitle"
          @keyup.enter="saveTask"
        ></v-text-field>
      </v-card-text>
      <v-card-actions v-if="dialogProp.type === 'confirm'">
        <v-spacer></v-spacer>
        <v-btn color="red darken-1" text @click="cancelDialog"> No </v-btn>
        <v-btn
          color="green darken-1"
          text
          @click="deleteTask(dialogProp.dialogTaskId)"
        >
          Yes
        </v-btn>
      </v-card-actions>
      <v-card-actions v-if="dialogProp.type === 'input'">
        <v-spacer></v-spacer>
        <v-btn color="red darken-1" text @click="cancelDialog"> Cancel </v-btn>

        <v-btn
          color="green darken-1"
          text
          @click="saveTask"
          :disabled="isNotValid"
        >
          Save
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data() {
    return {
      taskTitle: "",
    };
  },
  props: ["dialogProp", "task"],
  inject: ["deleteTask"],
  mounted() {
    this.taskTitle = this.task.title;
  },
  computed: {
    isNotValid() {
      if (!this.taskTitle) return true;
      if (this.task.title === this.taskTitle) return true;
      return false;
    },
  },
  methods: {
    cancelDialog() {
      this.$emit("cancel-dialog");
    },
    saveTask() {
      console;
      if (!this.isNotValid) {
        this.$store.dispatch("editTitle", {
          title: this.taskTitle,
          id: this.task.id,
        });
        this.$emit("cancel-dialog");
      }
    },
  },
};
</script>

<style>
</style>