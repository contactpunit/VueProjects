<template>
  <div class="text-center">
    <v-overlay :value="overlay" class="flex-column">
      <p>Processing order ....</p>
      <v-progress-circular indeterminate size="64"></v-progress-circular>
    </v-overlay>

    <v-container v-if="!overlay">
      <v-row>
        <v-col sm="6" offset-sm="3" xl="4" offset-xl="4">
          <h3>Thank you for your purchase!</h3>
        </v-col>
      </v-row></v-container
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
      overlay: false,
    };
  },
  beforeMount() {
    this.overlay = true;
  },
  mounted() {
    setTimeout(() => {
      this.overlay = false;
    }, 5000);
  },
};
</script>