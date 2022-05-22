<template>
  <section>
    <form @submit.prevent="submitData">
      <input type="text" placeholder="Your Name" v-model="enteredName" />
      <input type="text" placeholder="Your Age" v-model="enteredAge" />
      <button>Set Data</button>
    </form>
  </section>
</template>

<script>
export default {
  data() {
    return {
      enteredName: "",
      enteredAge: "",
    };
  },
  methods: {
    submitData() {
      this.$emit("submit-data", this.enteredName, this.enteredAge);
    },
  },
  emits: ["submit-data"],
};
</script>