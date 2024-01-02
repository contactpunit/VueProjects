<template>
    <div class="login">
        <h1>Login Page</h1>
        <form action="submit" @submit.prevent="submitForm">
            <div>
                <label for="username">username</label>
                <input type="text" v-model="username" name="username" placeholder="enter the username">
            </div>
            <div>
                <label for="password">password</label>
                <input type="password" v-model="password" name="password" placeholder="enter password">
            </div>
            <button>login</button>
        </form>
    </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'
import {useRoute, useRouter} from 'vue-router'

const username = ref('')
const password = ref('')
const route = useRoute()
const router = useRouter()

const submitForm = () => {
    const user = username.value
    const pass = password.value
    window.name = 'protected'
    if(user && pass) {
        const redirectPath = route.query.redirect || '/protected'
        if(typeof redirectPath === 'string') router.push(redirectPath)
    }
}
</script>