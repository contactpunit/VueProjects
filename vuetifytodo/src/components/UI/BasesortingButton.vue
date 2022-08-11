<template>
  <v-btn @click="disableSorting" color="primary" class="button-done-sorting"
    >DONE SORTING</v-btn
  >
</template>

<script>
export default {
  methods: {
    disableSorting() {
      this.$store.dispatch("toggleSort");
    },
  },
};
</script>

<style lang="sass">
.button-done-sorting
    position: fixed
    bottom: 20px
    left: 50%
    transform: translateX(-50%)
</style>