<template>
  <div>
    <h2>Register</h2>
    <form @submit.prevent="registerUser">
      <div>
        <label for="firstname">First Name</label>
        <input
          type="text"
          name="firstname"
          v-model.trim="firstname.value"
          class="form-control"
          :class="{ invalid: !firstname.isValid }"
          @input="clearValidity('firstname')"
        />
      </div>
      <p v-if="!firstname.isValid">missing firstname</p>
      <div>
        <label for="lastname">Last Name</label>
        <input
          type="text"
          name="lastname"
          class="form-control"
          v-model.trim="lastname.value"
          :class="{ invalid: !lastname.isValid }"
          @input="clearValidity('lastname')"
        />
      </div>
      <p v-if="!lastname.isValid">missing lastname</p>
      <div>
        <label for="username">Username</label>
        <input
          type="text"
          name="username"
          class="form-control"
          v-model.trim="username.value"
          :class="{ invalid: !username.isValid }"
          @input="clearValidity('username')"
        />
      </div>
      <p v-if="!username.isValid">missing username</p>
      <div>
        <label for="password">Password</label>
        <input
          type="password"
          name="password"
          v-model.trim="password.value"
          class="form-control"
          :class="{ invalid: !password.isValid }"
          @input="clearValidity('password')"
        />
      </div>
      <p v-if="!password.isValid">missing password</p>
      <div class="form-group">
        <button class="btn btn-primary">Register</button>
        <button class="btn btn-link">Cancel</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: {
        value: '',
        isValid: true,
      },
      password: {
        value: '',
        isValid: true,
      },
      firstname: {
        value: '',
        isValid: true,
      },
      lastname: {
        value: '',
        isValid: true,
      },
      formIsValid: true,
    };
  },
  methods: {
    clearValidity(field) {
      if (!this[field].value) {
        this[field].isValid = false;
        return;
      }
      this[field].isValid = true;
    },
    registerUser() {
      this.formIsValid = true;
      if (
        !this.firstname.value ||
        !this.lastname.value ||
        !this.username.value ||
        !this.password.value
      ) {
        this.formIsValid = false;
      }
    },
  },
};
</script>

<style scoped>
.invalid {
  border-color: red;
}
</style>