<template>
  <base-container>
    <h4>{{ title }}</h4>
    <span>Price is {{ price }}</span>
    <div>
      {{ description }}
    </div>
  </base-container>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      selectedProduct: null,
    };
  },
  created() {
    this.selectedProduct = this.$store.getters.getAllProducts.find(
      (product) => product.id === this.id
    );
  },
  computed: {
    title() {
      return this.selectedProduct.title;
    },
    price() {
      return this.selectedProduct.price;
    },
    description() {
      return this.selectedProduct.description;
    },
  },
};
</script>