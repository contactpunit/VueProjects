<template>
  <section>
    <input
      type="search"
      placeholder="Filter Items"
      name="filter"
      @input="search"
    />
  </section>
</template>

<script>
export default {
  methods: {
    search(event) {
      this.$emit('search', event.target.value);
    },
  },
};
</script>