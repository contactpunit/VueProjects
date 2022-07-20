<template>
  <base-container>
    <h2>All products</h2>
    <product-item
      v-for="product in allProducts"
      :key="product.id"
      :id="product.id"
      :title="product.title"
      :description="product.description"
      :price="product.price"
    ></product-item>
  </base-container>
</template>

<script>
import ProductItem from "./ProductItem.vue";
export default {
  components: {
    ProductItem,
  },
  computed: {
    allProducts() {
      return this.$store.getters.getAllProducts;
    },
  },
};
</script>

<style scoped>
baseContainer {
  margin: 3rem auto;
  max-width: 40rem;
  padding: 1rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
}
</style>