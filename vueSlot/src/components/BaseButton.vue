<template>
    <button>{{ props.text }}</button>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
const props = defineProps({
    text: {type: String}
})
</script>