<script setup lang="ts">
import sourceData from '../data.json'
import { reactive } from 'vue'

const destinations = reactive(sourceData.destinations)
</script>

<template>
  <div id="nav">
    <app-link id="logo" to="/">Home</app-link>
    <app-link to="about">About</app-link>
    <app-link
      v-for="destination in destinations"
      :key="destination.id"
      :to="{
        name: 'destination',
        params: {
            id: destination.id,
            slug: destination.slug
        }
      }">
      {{ destination.name }}
    </app-link>
    <app-link to="https://www.google.com">Google</app-link>
  </div>
</template>

<style>
#nav .router-bold {
    font-weight: bold;
    border-bottom: 2px solid red;
}
</style>