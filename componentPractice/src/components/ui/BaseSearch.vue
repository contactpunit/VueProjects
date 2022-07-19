<template>
  <section>
    <input
      type="text"
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
      console.log(event.target.value);
    },
  },
};
</script>