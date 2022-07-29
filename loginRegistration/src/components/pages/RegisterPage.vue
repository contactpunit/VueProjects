<template>
  <base-dialog
    v-if="error"
    title="Register Failed"
    :errMessage="error"
    @clear-error="resetError"
  >
  </base-dialog>
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
        <label for="email">Email</label>
        <input
          type="email"
          name="email"
          class="form-control"
          v-model.trim="email.value"
          :class="{ invalid: !email.isValid }"
          @input="clearValidity('email')"
        />
      </div>
      <p v-if="!email.isValid">missing email</p>
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
        <button class="btn btn-link" @click="cancelRegister">Cancel</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      error: null,
      email: {
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
    cancelRegister() {
      this.$router.replace('/');
    },
    resetError() {
      this.error = false;
    },
    clearValidity(field) {
      if (!this[field].value) {
        this[field].isValid = false;
        return;
      }
      this[field].isValid = true;
    },
    async registerUser() {
      this.formIsValid = true;
      if (
        !this.firstname.value ||
        !this.lastname.value ||
        !this.email.value ||
        !this.password.value
      ) {
        this.formIsValid = false;
      }
      if (this.formIsValid) {
        try {
          await this.$store.dispatch('addUser', {
            firstname: this.firstname.value,
            lastname: this.lastname.value,
            email: this.email.value,
            password: this.password.value,
          });
        } catch (err) {
          this.error = err.message;
        }
        this.$router.replace('/');
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