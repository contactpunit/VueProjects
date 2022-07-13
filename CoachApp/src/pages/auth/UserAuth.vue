<template>
  <base-card>
    <form @submit.prevent="submitForm">
      <div class="form-control">
        <label for="email">Email</label>
        <input type="email" id="email" v-model.trim="email" />
      </div>
      <div class="form-control">
        <label for="password">Password</label>
        <input type="password" id="password" v-model.trim="password" />
      </div>
      <p v-if="!formIsValid">Please enter valid email and password</p>
      <base-button @click="login">Login</base-button>
      <base-button mode="flat" @click="signUp">Signup</base-button>
    </form>
  </base-card>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      formIsValid: true,
      mode: 'login',
    };
  },
  methods: {
    login() {
      this.mode = 'login';
    },
    signUp() {
      this.mode = 'signup';
    },
    submitForm() {
      this.formIsValid = true;
      if (!this.email || !this.password || this.password.length < 6) {
        this.formIsValid = false;
        return;
      }
      if (this.mode === 'login') {
        // do something
      } else {
        this.$store.dispatch('signup', {
          email: this.email,
          password: this.password,
        });
      }
    },
  },
};
</script>

<style scoped>
form {
  margin: 1rem;
  padding: 1rem;
}

.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  border: 1px solid #ccc;
  padding: 0.15rem;
}

input:focus,
textarea:focus {
  border-color: #3d008d;
  background-color: #faf6ff;
  outline: none;
}
</style>