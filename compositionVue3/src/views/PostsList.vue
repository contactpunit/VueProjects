<template>
    <div class="posts">
        <h2>All Posts</h2>
        <ul>
            <li v-for="post in posts" :key="post.id">
                <router-link :to="`/post/${post.id}`">{{post.title}}</router-link>
            </li>
        </ul>
    </div>
</template>

<script setup>

import {ref} from 'vue'

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
</style>