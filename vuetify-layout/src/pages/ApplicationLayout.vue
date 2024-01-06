<template>
  <v-layout class="rounded rounded-md">
    <v-app-bar title="Application bar" :color="`rgb(0, 0, 256)`">
      <template #append>
        <v-avatar
        size="42"
        rounded="0"
        color="blue"
        >
      <span>PJ</span></v-avatar>
      </template>
    </v-app-bar>

    <v-navigation-drawer>
      <v-list>
        <v-list-item title="Navigation drawer"></v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main class="d-flex align-center justify-center" style="min-height: 600px;">
      <router-view></router-view>
    </v-main>
  </v-layout>
</template>