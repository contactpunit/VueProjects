<template>
  <div class="text-subtitle-1 ml-3">{{ getDate }}</div>
</template>

<script>
import { format } from "date-fns";

export default {
  computed: {
    getDate() {
      return format(new Date(), "do MMM, yyyy H:mm:ss");
    },
  },
  mounted() {
    this.getDate;
  },
};
</script>

<style>
</style>