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
      username: '',
      password: '',
    };
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
</style>