<template>
  <div>
    <h2>Login</h2>
    <form>
      <div class="form-group">
        <label for="username">Username</label>
        <input type="text" name="username" v-model.trim="username" />
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" name="password" v-model.trim="password" />
      </div>
      <div class="form-group">
        <button class="btn btn-primary">Register</button>
        <button>Login</button>
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
    };
  },
};
</script>