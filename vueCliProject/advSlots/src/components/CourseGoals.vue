<template>
  <section>
    <ul>
      <li v-for="goal in goals" :key="goal">
        <slot :item="goal"></slot>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      goals: ["Finish course", "Learn Vue"],
    };
  },
};
</script>

<style scoped>
section {
  margin: 0.5rem 0;
  color: #3a3a3a;
}
</style>