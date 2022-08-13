<template>
  <v-container mb-12>
    <v-row>
      <v-col sm="10" offset-sm="1" lg="8" offset-lg="2">
        <h2>
          Popular Products
          <v-btn to="/store" color="primary" small text>View All</v-btn>
        </h2>
      </v-col>
    </v-row>
    <v-row>
      <v-col sm="10" offset-sm="1" lg="8" offset-lg="2">
        <v-row>
          <v-col
            sm="6"
            md="4"
            v-for="product in allProducts"
            :key="product.name"
          >
            <vertical-card :product="product"></vertical-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import VerticalCard from "../cards/VerticalCard.vue";

export default {
  data() {
    return {};
  },
  components: {
    VerticalCard,
  },
  computed: {
    allProducts() {
      return this.$store.state.products;
    },
  },
};
</script>