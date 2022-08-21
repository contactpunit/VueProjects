<template>
    <div class="posts">
        <h2>All Posts</h2>
        <ul>
            <li v-for="post in posts" :key="post.id">
                <router-link :to="`/post/${post.id}`">{{post.title}}</router-link>
            </li>
        </ul>
    </div>
    <div>
            <button class="counter-button" @click="increment(3)">{{counterData.count}}</button>
    </div>
</template>

<script setup>

import {ref} from 'vue'
import {useCounter} from '../use/useCounter.js'

const {increment, counterData} = useCounter()


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
</style>