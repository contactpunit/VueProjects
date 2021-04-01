<template>
    <form @submit.prevent="submitUserData">
        <div>
            <label>Name</label>
            <input type="text" v-model="name">
        </div>
        <div>
            <label>Age</label>
            <input type="text" v-model="age">
        </div>
        <button>Add User</button>
    </form>
</template>

<script>
export default {
    emits: ['user-data'],
    data() {
        return {
            id: '',
            name: '',
            age: ''
        }
    },
    methods:{
        submitUserData() {
            this.$emit('user-data', this.name, this.age)
        }
    }
}
</script>
