<template>
    <li>
        <h2>{{ name }}{{toggleFavorite === '1' ? '(Favroite)' : ''}}</h2>
        <button @click="toggleDetails">{{this.visible ? 'Hide' : 'Show'}} Details</button>
        <button @click="toggleFav">Toggle Favroite</button>
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
        'emailAddress',
        'isFavroite'
    ],
    data() {    
        return {
            visible: false,
            // friend: {
            //         id: 'punit',
            //         name: 'Punit Jain',
            //         phone: '112232534676',
            //         email: 'punit@example.com'
            //     }
        toggleFavorite: this.isFavroite
        }
    },
    methods: {
        toggleDetails() {
            this.visible = !this.visible
        },
        toggleFav() {
            if (this.toggleFavorite === '1') {
                this.toggleFavorite = '0'
            }
            else {
                this.toggleFavorite = '1'
            }
        }
    }
}
</script>
