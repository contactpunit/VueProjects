<template>
    <div class="post-detail">
        <h1>Post detail page</h1>
        <p>display content of page with id {{ $route.params.id }}</p>
        <div>
            <button @click="showPostId">Show Post ID</button>
        </div>
        <div>
            <button @click="goToHome">Goto Home</button>
        </div>
        <p><router-link to="/posts">&lt; Back</router-link></p>
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