<template>
  <base-container>
    <h3>{{ title }}</h3>
    <h4>{{ price }}</h4>
    <p>{{ description }}</p>
    <router-link :to="detailLink" :id="id">View Details</router-link>
  </base-container>
</template>

<script>
export default {
  props: ["id", "title", "description", "price"],
  computed: {
    detailLink() {
      return "/products/" + this.id;
    },
  },
};
</script>

<style scoped>
/* ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

li {
  margin: 1rem 0;
  border: 1px solid #ccc;
  padding: 1rem;
} */

h3,
h4 {
  margin: 0.5rem 0;
}
</style>