<template>
  <div>
    <v-row v-for="product in products" :key="product.name">
      <horizontal-card :product="product"></horizontal-card>
    </v-row>
  </div>
</template>

<script>
import HorizontalCard from "../cards/HorizontalCard.vue";

export default {
  components: {
    HorizontalCard,
  },
  computed: {
    products() {
      return this.$store.state.products;
    },
  },
};
</script>