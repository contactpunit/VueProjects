<template>
  <base-container title="Vuex">
    <the-counter></the-counter>
    <favorite-counter></favorite-counter>
    <button @click="increment">Add 1</button>
    <change-counter></change-counter>
    <!-- <h3>{{ counter }}</h3> -->
    <!-- <button @click="increment" i>Add 1</button> -->
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import TheCounter from './components/TheCounter.vue';
import ChangeCounter from './components/ChangeCounter.vue';
import FavoriteCounter from './components/FavoriteCounter.vue';

export default {
  components: {
    BaseContainer,
    TheCounter,
    ChangeCounter,
    FavoriteCounter,
  },
  methods: {
    increment() {
      this.$store.commit('increment');
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