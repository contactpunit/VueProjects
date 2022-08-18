<template>
  <v-stepper-content step="1">
    <v-text-field
      :name="contact.name"
      label="Name"
      required
      :rules="[rules.required]"
    ></v-text-field>
    <v-text-field
      :name="contact.email"
      label="Email"
      required
      :rules="[rules.required, rules.email]"
    ></v-text-field>
    <v-text-field
      :name="contact.phone"
      label="Phone"
      required
      :rules="[rules.required, rules.phone]"
    ></v-text-field>
    <v-btn color="primary" @click="next">Continue</v-btn>
    <v-btn text @click="$router.replace('/cart')">Cancel</v-btn>
  </v-stepper-content>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      email: "",
      phone: "",
    };
  },
  props: ["contact", "rules", "next"],
};
</script>