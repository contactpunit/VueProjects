<template>
  <div>
    <base-dialog :show="!!error" title="Error" @close="closeDialog">
      <p>{{ error }}</p>
    </base-dialog>
    <base-dialog fixed :show="isLoading" title="Authenticating...">
      <base-spinner></base-spinner>
    </base-dialog>
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      formIsValid: true,
      mode: 'login',
      isLoading: false,
      error: null,
    };
  },
  methods: {
    closeDialog() {
      this.error = null;
    },
    login() {
      this.mode = 'login';
    },
    signUp() {
      this.mode = 'signup';
    },
    async submitForm() {
      this.formIsValid = true;
      if (!this.email || !this.password || this.password.length < 6) {
        this.formIsValid = false;
        return;
      }

      this.isLoading = true;
      try {
        if (this.mode === 'login') {
          await this.$store.dispatch('login', {
            email: this.email,
            password: this.password,
          });
          const redirectUrl = this.$route.query.redirect;
          if (redirectUrl) {
            this.$router.replace('/register');
          } else {
            this.$router.replace('/coaches');
          }
        } else {
          await this.$store.dispatch('signup', {
            email: this.email,
            password: this.password,
          });
        }
      } catch (err) {
        this.error = err.message || 'Failed to signup/login';
      }
      this.isLoading = false;
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