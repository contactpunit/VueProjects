<template>
    <div class="modal">
        <h1>Modal</h1>
        <!-- <button @click="showModal" v-if="!modalOn">Show Modal</button> -->
        <button @click="showModal" v-if="!modalOn">Show Modal</button>
        <user-modal v-if="modalOn" title="This is a Modal" @hideModal="modalOn = !modalOn">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur consequatur distinctio nulla temporibus a tempore expedita repellat exercitationem dolor, ipsum, aliquid, sunt excepturi? Ad quasi, error fugiat facilis corrupti explicabo?</p>
        </user-modal>
    </div>
</template>

<script setup>
import UserModal from '../components/UserModal.vue'

import {ref} from 'vue'

const modalOn = ref(false)

const showModal = () => {
    modalOn.value = true
}


</script>
