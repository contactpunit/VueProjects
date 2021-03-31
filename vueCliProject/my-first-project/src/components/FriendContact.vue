<template>
    <li>
        <h2>{{friend.name}}</h2>
        <button @click="toggleDetails">{{this.visible ? 'Hide' : 'Show'}} Details</button>
        <ul v-if="this.visible">
            <li><strong>Phone:</strong>{{friend.phone}}</li>
            <li><strong>Email:</strong>{{friend.email}}</li>
        </ul>
    </li>
</template>

<script>
export default {
    data() {
        return {
            visible: false,
            friend: {
                    id: 'punit',
                    name: 'Punit Jain',
                    age: 40,
                    phone: '112232534676',
                    email: 'punit@example.com'
                }
        }
    },
    methods: {
        toggleDetails() {
            this.visible = !this.visible
        }
    }
}
</script>
