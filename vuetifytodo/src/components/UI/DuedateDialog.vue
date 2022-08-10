<template>
  <v-dialog
    ref="dialog"
    :value="true"
    :return-value.sync="date"
    persistent
    width="290px"
  >
    <v-date-picker v-model="date" scrollable>
      <v-spacer></v-spacer>
      <v-btn text color="primary" @click="cancelDialog"> Cancel </v-btn>
      <v-btn text color="primary" @click="saveDate(date)"> OK </v-btn>
    </v-date-picker>
  </v-dialog>
</template>

<script>
export default {
  props: ["task", "cancelDialog"],
  mounted() {
    this.date = this.task.dueDate;
  },
  data() {
    return {
      date: null,
    };
  },
  methods: {
    saveDate(date) {
      this.$store.dispatch("saveDate", { date, id: this.task.id });
      this.$emit("cancel-dialog");
    },
  },
};
</script>
