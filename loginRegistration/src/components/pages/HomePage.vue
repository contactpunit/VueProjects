<template>
  <div class="container">
    <h1>Hi {{ fullname }}</h1>
    <p>You're logged in with Vue + Vuex & JWT!!</p>
    <h2>Users from secure api end point:</h2>
    <li>
      {{ fullname }} -
      <button class="btn btn-link" @click="deleteUser">Delete</button>
    </li>
    <button class="btn-link btn" @click="logout">Logout</button>
  </div>
</template>

<script>
export default {
  computed: {
    fullname() {
      return this.$store.getters.getFullName;
    },
  },
  methods: {
    async logout() {
      await this.$store.dispatch('logout');
      this.$router.replace('/login');
    },
    async deleteUser() {
      try {
        this.$store.dispatch('deleteUser');
        this.$router.replace('/login');
      } catch (err) {
        console.log(err.message);
      }
    },
  },
};
</script>