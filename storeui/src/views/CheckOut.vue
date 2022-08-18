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
            <v-stepper-content step="1"> Step 1 </v-stepper-content>
            <v-stepper-content step="2"> Step 2 </v-stepper-content>
            <v-stepper-content step="3"> Step 3 </v-stepper-content>
          </v-stepper-items>
        </v-stepper>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      step: 2,
    };
  },
};
</script>