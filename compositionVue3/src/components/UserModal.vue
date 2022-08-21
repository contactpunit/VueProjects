<template>
<teleport to="body">
    <div class="modal">
            <slot name="header"></slot>
            <slot></slot>
            <pre>{{ $slots.header() }}</pre>
            <button @click="hideModal">Hide Modal</button>
        </div>
</teleport>
</template>

<script setup>
import {useSlots} from 'vue'

const slot = useSlots()
console.log(slot.header())
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
