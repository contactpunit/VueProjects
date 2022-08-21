<template>
<teleport to="body">
    <div class="modal-dark" v-if="modelValue">
            <h1>{{ props.title }}</h1>
            <slot></slot>
            <button @click="$emit('update:modelValue', false)">Hide Modal</button>
        </div>
</teleport>
</template>

<script setup>

const props = defineProps(['modelValue', 'title'])
const modalEvent = defineEmits(['update:modelValue'])


</script>


<style scoped>
.modal-dark {
    background: #333;
    color: white;
    padding: 10px;
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    z-index: 1;
}
</style>
