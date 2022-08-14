<template>
  <div>
    <h3>Products</h3>
    <v-row>
      <v-col
        sm="6"
        md="4"
        v-for="product in $store.state.products"
        :key="product.name"
      >
        <vertical-card :product="product"></vertical-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import VerticalCard from "../cards/VerticalCard.vue";

export default {
  components: {
    VerticalCard,
  },
};
</script>