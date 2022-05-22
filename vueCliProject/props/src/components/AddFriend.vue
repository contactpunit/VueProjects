<template>
  <form @submit.prevent="submitData">
    <div>
      <label>Name</label>
      <input type="text" v-model="inputName" />
    </div>
    <div>
      <label>Phone</label>
      <input type="text" v-model="inputPhone" />
    </div>
    <div>
      <label>Email</label>
      <input type="text" v-model="inputEmail" />
    </div>
    <div>
      <button>Add Contact</button>
    </div>
  </form>
</template>

<script>
export default {
  emits: ["add-contact"],
  data() {
    return {
      inputName: "",
      inputPhone: "",
      inputEmail: "",
    };
  },
  methods: {
    submitData() {
      this.$emit(
        "add-friend",
        this.inputName,
        this.inputPhone,
        this.inputEmail
      );
    },
  },
};
</script>