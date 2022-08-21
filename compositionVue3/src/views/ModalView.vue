<template>
    <div class="modal">
        <h1>Modal</h1>
        <div>
            <label>Show dark modals? </label>
            <input type="checkbox" v-model="isDarkModal">
        </div>
        <button @click="showModal" v-if="!modalOn">Show Modal</button>
        <component v-model="modalOn" title="This is a Modal" :is="isDarkModal ? darkModal : UserModal" :userData="userData">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur consequatur distinctio nulla temporibus a tempore expedita repellat exercitationem dolor, ipsum, aliquid, sunt excepturi? Ad quasi, error fugiat facilis corrupti explicabo?</p>
        </component>
        
    </div>
</template>

<script setup>
import UserModal from '../components/UserModal.vue'
import darkModal from '../components/DarkModal.vue'

import {ref} from 'vue'

const modalOn = ref(false)
const isDarkModal = ref(false)

const showModal = () => {
    modalOn.value = true
}

const prop = defineProps(['userData'])


</script>
