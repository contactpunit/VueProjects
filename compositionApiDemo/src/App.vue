<template>
  <section class="container">
    <h2>{{ fullName }}</h2>
    <h3>{{ age }}</h3>
    <button @click="changeAge">Change Age</button>
    <div>
      <label for="firstname">First Name</label>
      <input
        type="text"
        placeholder="First Name"
        name="firstname"
        @input="getFirstName"
      />
    </div>
    <div>
      <label for="firstname">Last Name</label>
      <input
        type="text"
        placeholder="Last Name"
        name="lastname"
        @input="getLastName"
      />
    </div>
  </section>
</template>

<script>
import { ref, computed } from 'vue';
export default {
  setup() {
    const age = ref(33);
    const firstName = ref('');
    const lastName = ref('');

    function getFirstName(event) {
      firstName.value = event.target.value;
    }

    function getLastName(event) {
      lastName.value = event.target.value;
    }

    const fullName = computed(function () {
      return firstName.value + ' ' + lastName.value;
    });

    function changeAge() {
      age.value = 44;
    }
    return { age, fullName, changeAge, getFirstName, getLastName };
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