<template>
  <the-header></the-header>
  <router-view></router-view>
</template>

<script>
import TheHeader from './components/layouts/TheHeader.vue';
export default {
  components: {
    TheHeader,
  },
  created() {
    this.$store.dispatch('autoLogin');
  },
  computed: {
    didAutoLogout() {
      return this.$store.getters.didAutoLogout;
    },
  },
  watch: {
    didAutoLogout(currValue, oldValue) {
      if (currValue && currValue !== oldValue) {
        this.$router.replace('/coaches');
      }
    },
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
}
</style>