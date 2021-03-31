function getRandomValue(min, max) {
    return Math.floor(Math.random() * (max - min)) + min
}

const app = Vue.createApp({
    data() {
        return {
            monsterHealth: 100,
            playerHealth: 100,
            currentRound: 0,
            winner: null,
            logMessages: []
        }
    },
    methods: {
        attackMonster() {
            const attackValue = getRandomValue(12, 5)
            this.monsterHealth = this.monsterHealth - attackValue
            this.strikeBack()
            this.logMessage('player', 'attack Monster', attackValue)
            this.currentRound++
        },
        strikeBack() {
            const strikeValue = getRandomValue(10, 7)
            this.playerHealth = this.playerHealth - strikeValue
            this.logMessage('monster', 'attack Player', strikeValue)
        },
        specialAttack() {
            const specialValue = getRandomValue(12, 22)
            this.monsterHealth = this.monsterHealth - specialValue
            this.logMessage('player', 'special attack Monster', specialValue)
            this.strikeBack()
            this.currentRound++
        },
        healPlayer() {
            this.currentRound++
            const healValue = getRandomValue(3, 6)
            if (this.playerHealth + healValue > 100) {
                this.playerHealth = 100
                this.logMessage('player', 'heal', 100)
                return
            }
            this.playerHealth = this.playerHealth + healValue
            this.logMessage('player', 'heal', healValue)
            this.strikeBack()
        },
        startAgain() {
            this.playerHealth = 100
            this.monsterHealth = 100
            this.currentRound = 0
            this.winner = null
            this.logMessages = []
        },
        surrender() {
            this.currentRound++
            this.playerHealth = 0
            this.logMessage('player', 'surrender', this.playerHealth)
        },
        logMessage(user, action, value) {
            this.logMessages.unshift({
                user: user,
                actionType: action,
                actionValue: value
            })
        }
    },
    watch: {
        playerHealth(value) {
            if (value <= 0 && this.monsterHealth <= 0) {
                this.winner = 'draw'
            }
            else if (value <= 0) {
                this.winner = 'monster'
            }
        },
        monsterHealth(value) {
            if (value <= 0 && this.playerHealth <= 0) {
                this.winner = 'draw'
            }
            else if (value <= 0) {
                this.winner = 'player'
            }
        }
    },
    computed: {
        monsterStyles() {
            return { width: (this.monsterHealth > 0 ? this.monsterHealth : 0) + '%' }
        },
        playerStyles() {
            return { width: (this.playerHealth > 0 ? this.playerHealth : 0) + '%' }
        },
        roundAvailable() {
            return this.currentRound % 3 !== 0
        }
    }

})

app.mount('#game')