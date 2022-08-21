<template>
<teleport to="body">
    <div class="modal">
            <h1>{{ props.title }}</h1>
            <slot></slot>
            <button @click="hideModal">Hide Modal</button>
        </div>
</teleport>
</template>

<script setup>
const props = defineProps(['title'])
console.log(props.title)
</script>


<style scoped>
.modal {
    background: beige;
    padding: 10px;
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    z-index: 1;
}
</style>
