<script setup>
import {computed} from 'vue'
import { RouterLink } from 'vue-router'

const props = { ...RouterLink.props }
const isExternal = computed(() => {
    return props.to === 'string' && props.to.startsWith('https')
})

</script>

<template>
    <a :href="props.to" v-if="isExternal"><slot></slot></a>
    <router-link :props="props" v-else><slot></slot></router-link>
</template>