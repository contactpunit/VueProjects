<template>
  <v-snackbar v-model="snackbar">
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
    snackbar() {
      return this.$store.getters.getSnackbarValue.view;
    },
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