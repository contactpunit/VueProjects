<template>
    <h1>{{ props.experienceSlug }}</h1>
    <img :src="`/images/${reqExperience?.image}`" :alt="props.experienceSlug">
    <p>{{ reqExperience?.description }}</p>
</template>

<script setup lang="ts">
import { defineProps, computed } from 'vue';
import sourceData from '../data.json'

const props = defineProps({
    experienceSlug: {type:String, required: true},
    id: {type: String, required: true},
    slug: {type: String, required: true}
})

interface Experience {
    description: string;
    image: string;
    name: string;
    slug: string;
}

const reqDestination = computed(() => {
    return sourceData.destinations.find(destination => destination.id === +props.id)
})

const reqExperience = computed<Experience| undefined>(() => {
    return reqDestination.value?.experiences.find(experience => experience.slug === props.experienceSlug)
})

</script>