<script setup lang="ts">
import { ref } from "vue";
import { DateTime } from "luxon";
import { TimelinePost, today, thisWeek, thisMonth } from "../posts";
import { computed } from "@vue/reactivity";
import TimelineItem from "./TimelineItem.vue";

const periods = ["Today", "This Week", "This Month"] as const;

const selectedPeriod = ref<Period>("Today");

const posts = computed<TimelinePost[]>(() => {
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
    <span class="panel-tabs">
      <a
        href="#"
        v-for="period of periods"
        :key="period"
        @click="selectPeriod(period)"
        >{{ period }}
      </a>
    </span>

    <TimelineItem href="#" v-for="post of posts" :key="post.id" :post="post">
    </TimelineItem>
  </nav>
</template>
