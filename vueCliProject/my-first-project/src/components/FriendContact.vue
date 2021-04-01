<template>
    <li>
        <h2>{{ name }}{{isFavroite ? '(Favroite)' : ''}}</h2>
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
    props: {
        id: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        phoneNumber: {
            type: String,
            required: true
        },
        emailAddress: {
            type: String,
            required: true
        },
        isFavroite: {
            type: Boolean,
            required: false,
            default: false
        }
    },
    data() {    
        return {
            visible: false,
        // toggleFavorite: this.isFavroite
        }
    },
    methods: {
        toggleDetails() {
            this.visible = !this.visible
        },
        toggleFav() {
            this.$emit('toggling-fav', this.id)
        }
    }
}
</script>
