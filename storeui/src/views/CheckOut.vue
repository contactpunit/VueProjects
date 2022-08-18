<template>
  <v-container>
    <v-row>
      <v-col sm="6" offset-sm="3">
        <v-stepper v-model="step">
          <v-stepper-header>
            <v-stepper-step step="1" :complete="step > 1"></v-stepper-step>
            <v-divider></v-divider>
            <v-stepper-step step="2" :complete="step > 2"></v-stepper-step>
            <v-divider></v-divider>
            <v-stepper-step step="3" :complete="step > 3"></v-stepper-step>
          </v-stepper-header>
          <v-stepper-items>
            <contact-info
              :contact="contact"
              :rules="rules"
              :next="next"
              @update-contact="populateFields($event)"
            ></contact-info>
            <shipping-info
              :contact="contact"
              :rules="rules"
              :next="next"
              :prev="prev"
              @update-contact="populateFields($event)"
            ></shipping-info>
            <review-order
              :contact="contact"
              :rules="rules"
              :prev="prev"
            ></review-order>
          </v-stepper-items>
        </v-stepper>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ContactInfo from "@/components/checkout/ContactInfo.vue";
import ShippingInfo from "@/components/checkout/ShippingInfo.vue";
import ReviewOrder from "@/components/checkout/ReviewOrder.vue";
export default {
  data() {
    return {
      step: 1,
      contact: {
        name: "",
        email: "",
        phone: "",
        state: "",
        zip: "",
        street: "",
      },
      rules: {
        required: (value) => !!value || "Required.",
        zip: (value) => value.length == 5 || "Must be five characters",
        email: (value) => {
          const pattern =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(value) || "Invalid e-mail.";
        },
        phone: (value) => {
          const pattern = /\d{10}/;
          return pattern.test(value) || "Invalid phone number.";
        },
      },
    };
  },
  methods: {
    populateFields(data) {
      if (data.name) this.contact.name = data.name;
      if (data.email) this.contact.email = data.email;
      if (data.phone) this.contact.phone = data.phone;
      if (data.state) this.contact.state = data.state;
      if (data.zip) this.contact.zip = data.zip;
      if (data.street) this.contact.street = data.street;
    },
    next() {
      this.step += 1;
    },
    prev() {
      this.step -= 1;
    },
  },
  components: {
    ContactInfo,
    ShippingInfo,
    ReviewOrder,
  },
};
</script>