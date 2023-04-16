<template>
  <div class="about">
    <h1>This is About Page</h1>
    <textarea name="about" id="about" cols="2" rows="2" placeholder="Add About text" v-AutoFocus></textarea>
  </div>
</template>

<script setup>
import {vAutoFocus} from '@/directives/vAutoFocus'
</script>

<style scoped>
textarea {
  width: 30rem;
  height: 10rem
}
</style>