<template>
  <div class="post">
    <h1>This is Post Page</h1>
    <textarea name="post" id="post" cols="2" rows="2" placeholder="Add Post data" v-AutoFocus></textarea>
    <ul>
      <li>
        <router-link to="/postDetail/1">Post 1</router-link>
      </li>
      <li>
        <router-link to="/postDetail/2">Post 2</router-link>
      </li>
    </ul>
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

li {
  list-style-type: none;
}
</style>