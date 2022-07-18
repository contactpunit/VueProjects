<template>
  <section class="container">
    <user-data
      :firstName="firstName"
      :lastName="lastName"
      :age="age"
    ></user-data>
    <button @click="changeAge">Change Age</button>
    <div>
      <label for="firstname">First Name</label>
      <input
        type="text"
        placeholder="First Name"
        name="firstname"
        v-model="firstName"
      />
    </div>
    <div>
      <label for="firstname">Last Name</label>
      <input
        type="text"
        placeholder="Last Name"
        name="lastname"
        ref="lastNameInput"
      />
    </div>
    <button @click="setLastName">Set Name</button>
  </section>
</template>

<script>
import { ref, computed, watch } from 'vue';
import UserData from './components/UserData.vue';
export default {
  components: {
    UserData,
  },
  setup() {
    const age = ref(33);
    const firstName = ref('');
    const lastName = ref('');
    const lastNameInput = ref(null);

    const fullName = computed(function () {
      return firstName.value + ' ' + lastName.value;
    });

    watch([age, fullName], function (newValues, oldValues) {
      console.log('Old age: ' + oldValues[0]);
      console.log('New age: ' + newValues[0]);
    });

    function changeAge() {
      age.value = 44;
    }

    function setLastName() {
      lastName.value = lastNameInput.value.value;
    }

    return {
      age,
      fullName,
      changeAge,
      firstName,
      lastName,
      setLastName,
      lastNameInput,
    };
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