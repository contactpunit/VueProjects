<template>
  <button @click="addOne">Add 1</button>
</template>

<script>
export default {
  methods: {
    addOne() {
      this.$store.dispatch('increase', { value: 10 });
    },
  },
};
</script>

<style scoped>
</style>