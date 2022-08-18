<template>
  <v-card outlined>
    <v-card-title>Payment Details</v-card-title>
    <v-card-text>
      <v-text-field label="name"></v-text-field>
      <v-text-field label="email"></v-text-field>
      <p>Total: $999</p>
      <v-btn color="primary" @click="checkout">Checkout</v-btn>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  methods: {
    checkout() {
      this.$router.push({ name: "checkout" });
    },
  },
};
</script>