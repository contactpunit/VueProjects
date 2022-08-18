<template>
  <v-stepper-content step="3">
    <v-list disabled dense>
      <v-subheader class="title"> Review Order </v-subheader>
      <v-list-item-group color="primary">
        <v-list-item v-for="(value, name) in contact" :key="name">
          <v-list-item-content>
            <v-list-item-title> {{ name }} : {{ value }} </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>

    <v-btn color="primary" @click="submitOrder">Submit Order</v-btn>
    <v-btn text @click="prev">Back</v-btn>
  </v-stepper-content>
</template>

<script>
export default {
  props: ["contact", "rules", "prev"],
  methods: {
    submitOrder() {
      this.$router.replace("/thankyou");
    },
  },
};
</script>