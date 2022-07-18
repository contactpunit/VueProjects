<template>
  <section class="container">
    <h2>{{ user.name }}</h2>
    <h3>{{ age }}</h3>
  </section>
</template>

<script>
import { ref, reactive, isReactive, isRef } from 'vue';
export default {
  setup() {
    const age = ref(32);
    const user = reactive({
      name: 'Punit',
    });

    console.log(isRef(age));
    console.log(isReactive(user));
    console.log(isRef(age.value));
    console.log(isReactive(user.name));

    return { user, age: age };
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