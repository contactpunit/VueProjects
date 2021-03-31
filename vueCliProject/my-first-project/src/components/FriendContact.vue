<template>
    <li>
        <h2>{{ name }}</h2>
        <button @click="toggleDetails">{{this.visible ? 'Hide' : 'Show'}} Details</button>
        <ul v-if="this.visible">
            <li><strong>Phone:</strong>{{ phoneNumber }}</li>
            <li><strong>Email:</strong>{{ emailAddress }}</li>
        </ul>
    </li>
</template>

<script>
export default {
    props: [
        'name',
        'phoneNumber',
        'emailAddress'
    ],
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
