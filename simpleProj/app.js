const app = Vue.createApp({
    data() {
        return {
            courseGoalA: '<h3>Learn Vue!!!</h3>',
            courseGoalB: '<h3>Master Vue!!!</h3>',
            vueLink: 'https://vuejs.org'
        }
    },
    methods: {
        outputGoal() {
            const randomNumber = Math.random()
            if (randomNumber < 0.5) {
                return this.courseGoalA
            }
            else {
                return this.courseGoalB
            }
        }
    }
})
app.mount('#user-goal')