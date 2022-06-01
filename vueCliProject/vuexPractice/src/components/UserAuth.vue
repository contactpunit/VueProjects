<template>
  <button @click="logInUser">Login</button>
  <button @click="logOutUser">Logout</button>
</template>

<script>
export default {
  methods: {
    logInUser() {
      this.$store.dispatch('logMeIn');
    },
    logOutUser() {
      this.$store.dispatch('logMeOut');
    },
  },
};
</script>