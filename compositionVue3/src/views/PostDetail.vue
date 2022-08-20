<template>
    <div class="postdetail">
        <h3>This is post detail page with id {{ $route.params.id }}</h3>
        <p>
            <router-link to="/posts">&lt; Back</router-link>
        </p>
        <div>
            <button @click="goToHome">Go to Home</button>
        </div>
        <div>
            <button @click="showPostId">Show Post ID</button>
        </div>
    </div>
</template>

<script setup>

import {useRoute, useRouter} from 'vue-router'

const route = useRoute()

const router = useRouter()

const showPostId = () => {
    console.log(route.params.id)
}

const goToHome = () => {
    router.push('/')
}

</script>