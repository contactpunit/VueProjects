<template>
  <div>
    <h2>Register</h2>
    <form>
      <div>
        <label for="firstname">First Name</label>
        <input type="text" name="firstname" v-model.trim="firstname" />
      </div>
      <div>
        <label for="lastname">Last Name</label>
        <input type="text" name="lastname" v-model.trim="lastname" />
      </div>
      <div>
        <label for="username">Username</label>
        <input type="text" name="username" v-model.trim="username" />
      </div>
      <div>
        <label for="password">Password</label>
        <input type="password" name="password" v-model.trim="password" />
      </div>
      <div>
        <button>Register</button>
        <button>Cancel</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
      firstname: '',
      lastname: '',
    };
  },
};
</script>