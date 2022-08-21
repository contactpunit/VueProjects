<template>
<teleport to="body">
    <div class="modal" v-if="modelValue">
            <h1>{{ props.title }}</h1>
            <slot></slot>
            <button @click="$emit('update:modelValue', false)">Hide Modal</button>
            <div>
                Useename is {{userData.username}}
            </div>
        </div>
</teleport>
</template>

<script setup>

const props = defineProps(['modelValue', 'title', 'userData'])
const modalEvent = defineEmits(['update:modelValue'])

// const closeModal = () => {
//     modalEvent('update:modelValue', false)
// }

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
