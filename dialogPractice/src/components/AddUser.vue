<template>
  <base-container>
    <h2>Add a User?</h2>
    <button @click="showDialog">Add User</button>
  </base-container>
</template>

<script>
export default {
  methods: {
    showDialog() {
      this.$emit('pop-dialog', 'add');
    },
  },
};
</script>

<style scoped>
button {
  font: inherit;
  background-color: #310131;
  border: 1px solid #310131;
  border-radius: 8px;
  color: white;
  padding: 0.5rem 1.5rem;
  cursor: pointer;
}

button:hover,
button:active {
  background-color: #770e77;
  border-color: #770e77;
}
</style>