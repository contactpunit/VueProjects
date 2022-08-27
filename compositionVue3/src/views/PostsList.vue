<template>
  <div class="posts">
    <h2>All Posts</h2>
    <ul>
      <li v-for="post in posts" :key="post.id">
        <router-link :to="`/post/${post.id}`">{{ post.title }}</router-link>
      </li>
    </ul>
  </div>
  <div>
    <button class="counter-button" @click="counter.increase(3)" :class="{'yellow' : counter.oddOrEven === 'even' }">
      {{ counter.count }}
    </button>
  </div>
</template>

<script setup>

import {ref} from 'vue'
import {useCounterStore} from '../stores/counter.js'

const counter = useCounterStore()


const posts = ref([
    {
        id: '1',
        title: 'Post 1'
    },
    {
        id: '2',
        title: 'Post 2'
    },
    {
        id: '3',
        title: 'Post 3'
    }
])
</script>

<style scoped>
ul {
  margin-bottom: 30px;
}

.counter-button {
  font-size: 60px;
  width: 100%;
  background-color: pink;
}

.yellow {
    background-color: yellow;
}
</style>