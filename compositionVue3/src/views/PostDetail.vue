<template>
    <div class="postdetail">
        <h3>This is post detail page with id {{ $route.params.id }}</h3>
        <p>
            <router-link to="/posts">&lt; Back</router-link>
        </p>
        <div>
            <button @click="showPostId">Show Post ID</button>
        </div>
    </div>
</template>

<script setup>

import {useRoute} from 'vue-router'

const route = useRoute()

const showPostId = () => {
    console.log(route.params.id)
}

</script>