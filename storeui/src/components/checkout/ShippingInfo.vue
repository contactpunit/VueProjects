<template>
  <v-stepper-content step="2">
    <v-text-field
      v-model="street"
      required
      label="Street"
      :rules="[rules.required]"
    ></v-text-field>
    <v-text-field
      v-model="state"
      required
      label="State"
      :rules="[rules.required]"
    ></v-text-field>
    <v-text-field
      v-model="zip"
      required
      label="Zip Code"
      :rules="[rules.required, rules.zip]"
    ></v-text-field>

    <v-btn color="primary" @click="next">Next</v-btn>
    <v-btn @click="prev">Back</v-btn>
  </v-stepper-content>
</template>

<script>
export default {
  data() {
    return {
      state: "",
      zip: "",
      street: "",
    };
  },
  props: ["contact", "rules", "next", "prev"],
};
</script>