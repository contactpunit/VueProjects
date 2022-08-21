<template>
    <div class="modal">
        <h1>Modal</h1>
        <!-- <button @click="showModal" v-if="!modalOn">Show Modal</button> -->
        <button @click="showModal" v-if="!modalOn">Show Modal</button>
        <user-modal v-if="modalOn"></user-modal>
    </div>
</template>

<script setup>
import UserModal from '../components/UserModal.vue'

import {ref} from 'vue'

const modalOn = ref(false)

const showModal = () => {
    modalOn.value = true
}

const hideModal = () => {
    modalOn.value = false
}

</script>
