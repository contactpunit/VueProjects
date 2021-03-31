function getRandomValue(min, max) {
    return Math.floor(Math.random() * (max - min)) + min
}

const app = Vue.createApp({
    data() {
        return {
            monsterHealth: 100,
            playerHealth: 100,
            currentRound: 0
        }
    },
    methods: {
        attackMonster() {
            const attackValue = getRandomValue(12, 5)
            this.monsterHealth = this.monsterHealth - attackValue
            this.strikeBack()
            this.currentRound++
        },
        strikeBack() {
            const strikeValue = getRandomValue(10, 7)
            this.playerHealth = this.playerHealth - strikeValue
        },
        specialAttack() {
            const specialValue = getRandomValue(12, 22)
            this.monsterHealth = this.monsterHealth - specialValue
            this.strikeBack()
            this.currentRound++
        },
        healPlayer() {
            this.currentRound++
            const healValue = getRandomValue(3, 6)
            if (this.playerHealth + healValue > 100) {
                this.playerHealth = 100
                return
            }
            this.playerHealth = this.playerHealth + healValue
            this.strikeBack()
        }
    },
    computed: {
        monsterStyles() {
            return { width: this.monsterHealth + '%' }
        },
        playerStyles() {
            return { width: this.playerHealth + '%' }
        },
        roundAvailable() {
            return this.currentRound % 3 !== 0
        }
    }

})

app.mount('#game')