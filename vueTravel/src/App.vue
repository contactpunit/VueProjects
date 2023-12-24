<script setup lang="ts">
import TheNavigation from './components/TheNavigation.vue';
</script>

<template>
  <the-navigation></the-navigation>
  <div class="container">
    <router-view :key="$route.path"></router-view>
  </div>
</template>

