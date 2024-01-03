<script setup lang="ts">
import TheNavigation from './components/TheNavigation.vue';
</script>

<template>
  <the-navigation></the-navigation>
  <div class="container">
    <router-view v-slot="{Component}" class="view left-sidebar" name="SideBar">
      <transition name="slide" mode="out-in">
        <component :is="Component" :key="$route.path"></component>
      </transition>
    </router-view>
    <router-view v-slot="{Component}" class="main-view">
      <transition name="slide" mode="out-in">
        <component :is="Component" :key="$route.path"></component>
      </transition>
    </router-view>
  </div>
</template>

<style>
.slide-enter-active,
.slide-leave-active {
  transition: opacity 0.5s, transform 0.5s;
}
.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateX(-30%);
}
.container {
  display: flex;
}
.left-sidebar {
  width: 20%;
}
.main-view {
  width: 100%;
}
</style>
