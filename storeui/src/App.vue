<template>
  <v-app>
    <top-nav></top-nav>
    <v-content>
      <router-view></router-view>
    </v-content>
    <v-snackbar
      v-model="$store.state.snackbar.show"
      :multi-line="true"
      :right="true"
      :top="true"
      :color="$store.state.snackbar.variant"
    >
      {{ $store.state.snackbar.message }}
      <v-btn dark text @click="$store.state.snackbar.show = false">Close</v-btn>
    </v-snackbar>
  </v-app>
</template>

<script>
import TopNav from "./views/TopNav.vue";

export default {
  components: {
    TopNav,
  },
};
</script>

<style>
</style>