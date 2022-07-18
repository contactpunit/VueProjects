<template>
  <section class="container">
    <h2>{{ name }}</h2>
    <h3>{{ age }}</h3>
  </section>
</template>

<script>
import { reactive, toRefs } from 'vue';
export default {
  setup() {
    const user = reactive({
      name: 'Punit',
      age: 20,
    });

    const reactiveUser = toRefs(user);

    setTimeout(() => {
      user.age = 30;
      user.name = 'Nidhi';
    }, 5000);

    // console.log(isRef(age));
    // console.log(isReactive(user));
    // console.log(isRef(age.value));
    // console.log(isReactive(user.name));

    return { name: reactiveUser.name, age: reactiveUser.age };
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