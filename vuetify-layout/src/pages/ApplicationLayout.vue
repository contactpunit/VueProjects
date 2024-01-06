<template>
  <v-layout class="rounded rounded-md">
    <v-app-bar 
    :color="`rgb(0, 0, 256)`"
    >
      <template #prepend>
        <v-app-bar-nav-icon variant="text" @click="($event)=> drawer = !drawer">
        </v-app-bar-nav-icon>
        <v-toolbar-title>
          <router-link to="/"
          class="text-decoration-none text-white"
          >My App</router-link>
        </v-toolbar-title>
      </template>
      <template #append>
      <v-menu>
      <template v-slot:activator="{ props }">
        <v-avatar
        size="42"
        rounded="0"
        color="blue"
        v-bind="props"
        >
      <span>PJ</span></v-avatar>
      </template>
      <v-list>
        <v-list-item
          v-for="(item, index) in ['Profile', 'Settings', 'Logout']"
          :key="index"
          :value="index"
        >
          <v-list-item-title>{{ item }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
      </template>
    </v-app-bar>

    <v-navigation-drawer
    expand-on-hover
        rail
        v-model="drawer"
    >
      <!-- <v-list>
        <v-list-item title="Navigation drawer"></v-list-item>
      </v-list> -->
      <v-list density="compact" nav>
          <v-list-item prepend-icon="mdi-note" title="Posts" :to="`/posts`"></v-list-item>
          <v-list-item prepend-icon="mdi-comment" title="Comments" :to="`/comments`"></v-list-item>
        </v-list>
    </v-navigation-drawer>

    <v-main class="d-flex align-center justify-center" style="min-height: 600px;">
      <router-view></router-view>
    </v-main>
  </v-layout>
</template>

<script setup lang="ts">
import {ref} from 'vue'

const drawer = ref(false)
</script>