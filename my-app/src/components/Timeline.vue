<script setup lang="ts">
import { ref } from "vue";
import { DateTime } from "luxon";
import { Post, today, thisWeek, thisMonth } from "../posts";
import { computed } from "@vue/reactivity";

const periods = ["Today", "This Week", "This Month"] as const;

const selectedPeriod = ref<Period>("Today");

const posts = computed(() => {
  return [today, thisWeek, thisMonth]
    .map((post) => {
      return {
        ...post,
        created: DateTime.fromISO(post.created),
      };
    })
    .filter((post) => {
      if (selectedPeriod.value === "Today") {
        return post.created >= DateTime.now().minus({ day: 1 });
      } else if (selectedPeriod.value === "This Week") {
        return post.created >= DateTime.now().minus({ week: 1 });
      }
      return post;
    });
});

type Period = (typeof periods)[number];

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
