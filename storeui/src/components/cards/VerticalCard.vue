<template>
  <v-card outlined>
    <v-img :src="product.image" height="200px" />
    <v-card-title>{{ product.name }}</v-card-title>
    <v-card-subtitle>${{ product.price }}</v-card-subtitle>
    <v-card-actions>
      <v-btn color="success" outlined @click="addToCart(product)">
        <v-icon small left>mdi-plus-thick</v-icon>
        Add to Cart
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: ["product"],
  methods: {
    addToCart(product) {
      const reqProduct = this.$store.state.products.find(
        (p) => p.name === product.name
      );
      this.$store.dispatch("updateCart", reqProduct);
      this.$store.dispatch("showSnackbar");
    },
  },
};
</script>

<style>
</style>