<template>
  <base-container title="Vuex" v-if="userIsAuthenticated">
    <the-counter></the-counter>
    <favorite-counter></favorite-counter>
    <button @click="increment">Add 1</button>
    <change-counter></change-counter>
    <!-- <h3>{{ counter }}</h3> -->
    <!-- <button @click="increment" i>Add 1</button> -->
  </base-container>
  <base-container title="Auth">
    <user-auth></user-auth>
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import TheCounter from './components/TheCounter.vue';
import ChangeCounter from './components/ChangeCounter.vue';
import FavoriteCounter from './components/FavoriteCounter.vue';
import UserAuth from './components/UserAuth.vue';

export default {
  components: {
    BaseContainer,
    TheCounter,
    ChangeCounter,
    FavoriteCounter,
    UserAuth,
  },
  methods: {
    increment() {
      this.$store.commit('counters/increment');
    },
  },
  computed: {
    userIsAuthenticated() {
      return this.$store.getters.isAuthenticated;
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>