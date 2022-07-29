<template>
  <base-dialog
    v-if="error"
    title="Login Issue"
    :errMessage="error"
    @clear-error="resetError"
  >
  </base-dialog>
  <div>
    <h2>Login</h2>
    <form @submit.prevent="submitUser">
      <div class="form-group">
        <label for="username">Username</label>
        <input
          type="text"
          name="username"
          v-model.trim="username.value"
          @input="validateInput('username')"
        />
      </div>
      <p v-if="!username.isValid" :class="{ invalid: !username.isValid }">
        username cannot be empty
      </p>
      <div class="form-group">
        <label for="password">Password</label>
        <input
          type="password"
          name="password"
          v-model.trim="password.value"
          @input="validateInput('password')"
        />
      </div>
      <p v-if="!password.isValid" :class="{ invalid: !password.isValid }">
        password cannot be empty
      </p>
      <div class="form-group">
        <button class="btn btn-primary">Login</button>
        <router-link class="btn-link btn" to="/register">Register</router-link>
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
      error: null,
    };
  },
  methods: {
    async submitUser() {
      if (!this.username.value || !this.password.value)
        this.error = 'Missing required inputs';
      try {
        await this.$store.dispatch('loginUser', {
          email: this.username.value,
          password: this.password.value,
        });
      } catch (err) {
        console.log(err.message);
      }
    },
    resetError() {
      this.error = null;
      this.username.value = '';
      this.password.value = '';
      this.username.isValid = true;
      this.password.isValid = true;
    },
    validateInput(field) {
      if (field === 'username') {
        if (!this.username.value) this.username.isValid = false;
        else this.username.isValid = true;
      }
      if (field === 'password') {
        if (!this.password.value) this.password.isValid = false;
        else this.password.isValid = true;
      }
    },
  },
};
</script>

<style scoped>
.btn-link {
  font-weight: 400;
  color: #007bff;
  background-color: transparent;
}

.btn {
  display: inline-block;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  user-select: none;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

.invalid {
  color: red;
}
</style>