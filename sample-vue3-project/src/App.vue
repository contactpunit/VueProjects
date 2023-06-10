<script setup lang="ts">
import { RouterView } from 'vue-router'
import TimelineItem from './components/TimelineItem.vue'
</script>

<template>
  <div class="section">
    <div class="container">
      <TimelineItem />
    </div>
  </div>
  <RouterView />
</template>

<style scoped>
@import 'https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css';
</style>
