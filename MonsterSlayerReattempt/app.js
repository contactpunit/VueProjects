function calculateValue(min, max) {
    return (Math.random() * (max - min)) + min
}

const app = Vue.createApp({
    data() {
        return {
            playerHealth: 100,
            monsterHealth: 100,
            specialAttackCounter: 0,
            winner: null,
            logs: []
        }
    },
    computed: {
        specialAttackAvailable() {
            return this.specialAttackCounter % 3 !== 0
        },
        monsterHealthBar() {
            if (this.monsterHealth <= 0) this.monsterHealth = 0
            return { width: this.monsterHealth + '%' }
        },
        playerHealthBar() {
            if (this.playerHealth <= 0) this.playerHealth = 0
            return { width: this.playerHealth + '%' }
        }
    },
    watch: {
        playerHealth() {
            if (this.playerHealth <= 0 && this.monsterHealth <= 0) this.winner = 'draw'
            else if (this.playerHealth <= 0) this.winner = 'monster'
        },
        monsterHealth() {
            if (this.playerHealth <= 0 && this.monsterHealth <= 0) this.winner = 'draw'
            else if (this.monsterHealth <= 0) this.winner = 'player'
        }
    },
    methods: {
        attackMonster() {
            this.specialAttackCounter++
            this.monsterHealth -= calculateValue(5, 12)
            this.addLogMessage('player', 'attack')
            this.attackPlayer()
        },
        attackPlayer() {
            this.playerHealth -= calculateValue(8, 18)
            this.addLogMessage('monster', 'attack')
        },
        specialAttack() {
            this.specialAttackCounter++
            this.monsterHealth -= calculateValue(10, 20)
            this.addLogMessage('player', 'speciaAttack')
            this.attackPlayer()
        },
        healPlayer() {
            const healValue = calculateValue(20, 30)
            if (this.playerHealth + healValue > 100) this.playerHealth = 100
            else this.playerHealth += healValue
            this.addLogMessage('player', 'heal')
            this.attackPlayer()
        },
        startOver() {
            this.playerHealth = 100
            this.monsterHealth = 100
            this.specialAttackCounter = 0
            this.winner = null
            this.logs = []
        },
        surrender() {
            this.playerHealth = 0
        },
        addLogMessage(who, what) {
            this.logs.push({
                actionBy: who,
                action: what
            })
        }
    }
})
app.mount('#game')