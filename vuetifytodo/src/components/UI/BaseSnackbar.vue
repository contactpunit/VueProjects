<template>
  <v-snackbar v-model="$store.state.snackbar.view">
    {{ text }}

    <template v-slot:action="{ attrs }">
      <v-btn color="pink" text v-bind="attrs" @click="resetSnackbar">
        Close
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
export default {
  computed: {
    text() {
      return this.$store.getters.getSnackbarValue.text;
    },
  },
  methods: {
    resetSnackbar() {
      this.$store.commit("resetSnackbar");
    },
  },
};
</script>