<template>
  <v-app>
    <top-nav></top-nav>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import TopNav from "./components/TopNav.vue";

export default {
  components: {
    TopNav,
  },
};
</script>

<style>
</style>