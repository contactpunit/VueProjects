<template>
    <div>
        <h2>Protected page requires Auth</h2>
        <button @click="logout">Logout</button>
        <router-link :to="{name: 'invoices'}">
            <button>Invoices</button>
        </router-link>
    </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter()

const logout= () => {
    window.name = ''
    router.push({
        name: 'login'
    })

}
</script>