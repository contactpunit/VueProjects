<template>
    <section v-if="destination" class="destination">
        <h1>{{ destination.name }}</h1>
        <div class="destination-details">
            <img :src="`/images/${destination.image}`" :alt="destination.name">
            <p>{{ destination.description }}</p>
        </div>
    </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router';

const route = useRoute()
const destination = ref()

async function doApiCall() {
    const response = await fetch(`https://travel-dummy-api.netlify.app/${route.params.slug}.json`)
    destination.value = await response.json()
}

async function getDestination() {
    doApiCall()
    // watch(route, doApiCall)
}

getDestination()

</script>