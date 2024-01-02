<template>
    <div class="login">
        <h1>Logion Page</h1>
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
import {useRouter} from 'vue-router'

const username = ref('')
const password = ref('')

const router = useRouter()

const submitForm = () => {
    const user = username.value
    const pass = password.value
    console.log(user, ' ', pass)
    router.push({
        name: 'home'
    })

}
</script>