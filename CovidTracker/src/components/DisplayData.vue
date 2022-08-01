<template>
  <section class="container cases">
    <h3>Cases</h3>
    <div><strong>New: </strong>{{ newCases }}</div>
    <div><strong>Total: </strong>{{ totalCases }}</div>
  </section>
  <section class="container deaths">
    <h3>Deaths</h3>
    <div><strong>New: </strong>{{ newDeaths }}</div>
    <div><strong>Total: </strong>{{ totalDeaths }}</div>
  </section>
</template>

<script>
export default {
  props: ['newCases', 'newDeaths', 'totalCases', 'totalDeaths'],
};
</script>