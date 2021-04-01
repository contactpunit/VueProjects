<template>
    <form @submit.prevent="contactInfo">
        <div>
            <label>Name</label>
            <input type="text" v-model="inputName"/>
        </div>
        <div>
            <label>Phone Number</label>
            <input type="tel" v-model="inputPhone"/>
        </div>
        <div>
            <label>Email Address</label>
            <input type="email" v-model="inputEmail"/>
        </div>
        <button>Add Contact</button>
    </form>
</template>

<script>
export default {
    emits: ['add-contact'],
    data() {
        return {
            inputName: '',
            inputPhone: '',
            inputEmail: ''
        }
    },
    methods: {
        contactInfo() {
            this.$emit('add-contact', this.inputName, this.inputPhone, this.inputEmail)
        }
    }
}
</script>
