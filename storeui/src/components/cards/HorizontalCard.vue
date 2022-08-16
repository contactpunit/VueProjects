<template>
  <v-card outlined min-width="100%" class="mb-5 pa-4">
    <div class="d-flex">
      <div>
        <v-img :src="product.image" width="120px" height="120px"></v-img>
      </div>
      <div class="d-flex flex-column justify-center">
        <v-card-title class="pt-0">
          {{ product.name }}
        </v-card-title>
        <v-card-subtitle> ${{ product.price }} </v-card-subtitle>
        <v-btn color="error" outlined small class="ml-4">
          <v-icon small left>mdi-minus-thick</v-icon>
          Remove from Cart
        </v-btn>
      </div>
    </div>
  </v-card>
</template>

<script>
export default {
  props: ["product"],
};
</script>