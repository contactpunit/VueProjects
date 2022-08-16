<template>
  <v-container>
    <v-row>
      <v-col md="3" offset-lg="1">
        <sidebar-display></sidebar-display>
      </v-col>
      <v-col md="9" lg="7">
        <product-display></product-display>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ProductDisplay from "@/components/store/ProductDisplay.vue";
import SidebarDisplay from "@/components/store/SidebarDisplay.vue";

export default {
  components: {
    ProductDisplay,
    SidebarDisplay,
  },
};
</script>