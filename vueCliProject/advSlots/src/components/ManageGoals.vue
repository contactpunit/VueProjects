<template>
  <div>
    <h2>Manage Goals</h2>
    <input type="text" ref="goal" />
    <button @click="setGoal">Set Goal</button>
    <teleport to="body">
      <error-alert v-if="inputIsInvalid">
        <h2>Input is Invalid</h2>
        <p>Please enter value</p>
        <button @click="closeDialog">Okay</button>
      </error-alert>
    </teleport>
  </div>
</template>

<script>
import ErrorAlert from "./ErrorAlert.vue";
export default {
  components: {
    ErrorAlert,
  },
  data() {
    return {
      inputIsInvalid: false,
    };
  },
  methods: {
    setGoal() {
      const value = this.$refs.goal.value;
      if (value === "") {
        this.inputIsInvalid = true;
        console.log(this.inputIsInvalid);
      }
    },
    closeDialog() {
      this.inputIsInvalid = false;
    },
  },
};
</script>