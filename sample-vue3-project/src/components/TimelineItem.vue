<script setup lang="ts">
import { ref } from 'vue'
const periods = ['Today', 'This Week', 'This Month']
const selectedPeriod = ref('')
const selectPeriod = (period: string) => {
  selectedPeriod.value = period
}
</script>

<template>
  <nav class="is-primary panel">
    {{ selectedPeriod }}
    <span class="panel-tabs">
      <a
        :class="{ 'is-active': period === selectedPeriod }"
        v-for="period of periods"
        :key="period"
        @click="selectPeriod(period)"
        >{{ period }}</a
      >
    </span>
  </nav>
</template>
