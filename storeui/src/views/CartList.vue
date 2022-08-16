<template>
  <v-container>
    <v-row>
      <v-col sm="8" md="5" offset-md="2" lg="4" offset-lg="3">
        <product-list></product-list>
      </v-col>
      <v-col sm="4" md="3" order="first" order-sm="last">
        <checkout-box></checkout-box>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ProductList from "@/components/cart/ProductList.vue";
import CheckoutBox from "@/components/cart/CheckoutBox.vue";

export default {
  components: {
    ProductList,
    CheckoutBox,
  },
};
</script>