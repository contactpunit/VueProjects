<template>
    <p class="username">{{ username }}</p>
</template>

<script>
export default {
  props: {
    username: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="css" scoped>
.username {
    font-size: 50px;
    color: #dcae1d;
}
</style>
