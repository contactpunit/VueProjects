<template>
  <div class="about">
    <h1>About</h1>
    <textarea id="about" cols="3" rows="3" v-autofocus></textarea>
  </div>
</template>

<script setup>
import {vAutofocus} from '../directives/vAutofocus.js'

</script>


<style scoped>
textarea {
  height: 40px;
  overflow-y: hidden;
}
</style>