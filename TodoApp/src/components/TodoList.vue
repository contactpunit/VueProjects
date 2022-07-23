<template>
  <li>{{ todo }}</li>
</template>

<script>
export default {
  props: ['todo'],
};
</script>

<style scoped>
li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 2px solid hsla(0, 0%, 100%, 0.35);
  padding: 12px 24px;
  border-radius: 6px;
  margin-bottom: 12px;
}
</style>