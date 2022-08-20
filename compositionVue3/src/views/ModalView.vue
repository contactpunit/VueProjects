<template>
    <div class="modal">
        <h1>Modal</h1>
        <button @click="showModal" v-if="!modalOn">Show Modal</button>
        <teleport to="body">
        <div class="modal" v-if="modalOn">
            <h1>This is a modal</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur consequatur distinctio nulla temporibus a tempore expedita repellat exercitationem dolor, ipsum, aliquid, sunt excepturi? Ad quasi, error fugiat facilis corrupti explicabo?</p>
            <button @click="hodeModal">Hide Modal</button>
        </div>
        </teleport>
    </div>
</template>

<script setup>

import {ref} from 'vue'

const modalOn = ref(false)

const showModal = () => {
    modalOn.value = true
}

const hodeModal = () => {
    modalOn.value = false
}

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