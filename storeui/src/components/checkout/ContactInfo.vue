<template>
  <v-stepper-content step="1">
    <v-text-field
      v-model="name"
      label="Name"
      required
      :rules="[rules.required]"
    ></v-text-field>
    <v-text-field
      v-model="email"
      label="Email"
      required
      :rules="[rules.required, rules.email]"
    ></v-text-field>
    <v-text-field
      v-model="phone"
      label="Phone"
      required
      :rules="[rules.required, rules.phone]"
    ></v-text-field>
    <v-btn color="primary" @click="updateContact">Continue</v-btn>
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
  methods: {
    updateContact() {
      this.$emit("update-contact", {
        name: this.name,
        email: this.email,
        phone: this.phone,
      });
      this.next();
    },
  },
};
</script>