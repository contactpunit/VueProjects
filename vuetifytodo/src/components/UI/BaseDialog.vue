<template>
  <v-dialog :value="dialogProp.dialogShow" persistent max-width="290">
    <v-card>
      <v-card-title class="text-h5">
        {{ dialogProp.dialogTitle }}
      </v-card-title>
      <v-card-text>{{ dialogProp.dialogText }}</v-card-text>
      <v-card-actions>
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
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: ["dialogProp"],
  inject: ["deleteTask"],
  methods: {
    cancelDialog() {
      this.$emit("cancel-dialog");
    },
  },
};
</script>

<style>
</style>