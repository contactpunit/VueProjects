<template>
    <section v-if="destination" class="destination">
        <h1>{{ destination.name }}</h1>
        <div class="destination-details">
            <img :src="`/images/${destination.image}`" :alt="destination.name">
            <p>{{ destination.description }}</p>
        </div>
    </section>
    <section class="experiences" v-if="destination">
        <h2>Top experiences in {{ destination.name }}</h2>
        <div class="cards">
            <ExperienceCard 
              v-for="experience in destination.experiences"
              :key="experience.slug"
              :experience="experience"></ExperienceCard>
        </div>
    </section>
</template>

<script setup lang="ts">
import { ref, defineProps, onMounted } from 'vue'
// import { useRoute } from 'vue-router';
import ExperienceCard from '../components/ExperienceCard.vue';

// const route = useRoute()
const destination = ref()
const props = defineProps({
    slug: {type: String, required: true},
    id: {type: String, required: true}
});

onMounted(async() => {
    await doApiCall()
})

async function doApiCall() {
    // const response = await fetch(`https://travel-dummy-api.netlify.app/${route.params.slug}.json`)
    const response = await fetch(`https://travel-dummy-api.netlify.app/${props.slug}.json`)
    destination.value = await response.json()
}


</script>