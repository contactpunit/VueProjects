<script setup lang="ts">
import { ref } from "vue";
import { DateTime } from "luxon";
import { Post, today, thisWeek, thisMonth } from "../posts";

const periods = ["Today", "This Week", "This Month"] as const;

const posts = [today, thisWeek, thisMonth].map((post) => {
  return {
    ...post,
    created: DateTime.fromISO(post.created),
  };
});

type Period = (typeof periods)[number];

const selectedPeriod = ref<Period>("Today");

function selectPeriod(period: Period) {
  selectedPeriod.value = period;
}
</script>

<template>
  <nav class="is-primary panel">
    {{ selectedPeriod }}
    <span class="panel-tabs">
      <a
        href="#"
        v-for="period of periods"
        :key="period"
        @click="selectPeriod(period)"
        >{{ period }}</a
      >
    </span>

    <a href="#" v-for="post of posts" :key="post.id" class="panel-block">
      <a href="">{{ post.title }}</a>
      <div>{{ post.created.toFormat("d MMM") }}</div>
    </a>
  </nav>
</template>
