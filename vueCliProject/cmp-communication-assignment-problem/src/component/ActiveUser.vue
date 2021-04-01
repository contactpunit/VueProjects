<template>
<li>
    <h2>{{ name }}</h2>
    <h3>{{ age }}</h3>
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
        age: {
            type: String,
            required: true
        }
    },
}
</script>
