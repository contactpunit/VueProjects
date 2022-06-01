<template>
  <button @click="logInUser" v-if="!showMe">Login</button>
  <button @click="logOutUser" v-if="showMe">Logout</button>
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
  computed: {
    showMe() {
      return this.$store.getters.isAuthenticated;
    },
  },
};
</script>