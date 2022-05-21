<template>
<section>
    <h2>My Friends Details</h2>
    <ul>
        <li></li>
    </ul>
</section>
</template>


<script>
export default {
    data() {
        return {
            friends: [
                {
                    id: 'punit',
                    name: 'Punit Jain',
                    phone: '92445545454',
                    email: 'punit@local.com'
                },
                {
                    id: 'manu',
                    name: 'Manu Jain',
                    phone: '4546565656',
                    email: 'manu@localhost'
                }
            ]
        }
    }
}
</script>