<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" :mobile-breakpoint="768" app>
      <v-img
        lazy-src="https://picsum.photos/id/11/10/6"
        height="160"
        class="pa-4 pt-7"
        src="tree.jpg"
        gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
      >
        <v-avatar size="70" class="mb-2">
          <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
        </v-avatar>
        <div class="white--text text-subtitle-1 font-weight-bold">
          Punit Jain
        </div>
      </v-img>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item v-for="item in items" :key="item.title" :to="item.to" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>
              {{ item.title }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar color="primary" dark app src="tree.jpg" height="160">
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
        ></v-img>
      </template>

      <v-container class="pl-0 header-container">
        <v-row>
          <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
          <v-spacer></v-spacer>
          <search-item></search-item>
        </v-row>
        <v-row>
          <v-app-bar-title class="text-h6">{{
            $store.getters.getAppTitle
          }}</v-app-bar-title>
        </v-row>
        <v-row>
          <live-datetime></live-datetime>
        </v-row>
      </v-container>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
      <base-snackbar></base-snackbar>
    </v-main>
  </v-app>
</template>

<script>
import BaseSnackbar from "./components/UI/BaseSnackbar.vue";
import SearchItem from "./tools/SearchItem.vue";
import LiveDatetime from "./tools/LiveDatetime.vue";

export default {
  name: "App",

  data: () => ({
    drawer: null,
    items: [
      { title: "Todo", icon: "mdi-format-list-checks", to: "/" },
      { title: "About", icon: "mdi-help-box", to: "/about" },
    ],
  }),
  components: {
    BaseSnackbar,
    SearchItem,
    LiveDatetime,
  },
};
</script>

<style lang="sass">
.header-container
  max-width: none !important
</style>
