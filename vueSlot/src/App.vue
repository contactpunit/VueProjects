<script setup lang="ts">
import BaseButton from './components/BaseButton.vue';
import AppLayout from './components/AppLayout.vue';
</script>

<template>
  <div>
    <app-layout>
      <template #header>This is header information</template>
      <base-button>Press Me</base-button>
      <template #footer></template>
    </app-layout>

  </div>
</template>

