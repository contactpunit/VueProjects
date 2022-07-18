<template>
  <section class="container">
    <h2>{{ user.name }}</h2>
    <h3>{{ user.age }}</h3>
    <button @click="changeAge">Change Age</button>
  </section>
</template>

<script>
import { reactive } from 'vue';
export default {
  setup() {
    const user = reactive({
      name: 'Punit',
      age: 20,
    });

    function changeAge() {
      user.age = 44;
    }
    return { user, changeAge };
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

.container {
  margin: 3rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  text-align: center;
}
</style>