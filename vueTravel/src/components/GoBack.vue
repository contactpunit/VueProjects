<template>
    <span class="go-back">
        <button @click="goBack">Go Back</button>
    </span>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter()

const goBack = ()=> {
    console.log('go back')
    router.back()
}
</script>