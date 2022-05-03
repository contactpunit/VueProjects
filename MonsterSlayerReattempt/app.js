function calculateValue(min, max) {
    return (Math.random() * (max - min)) + min
}

const app = Vue.createApp({
    data() {
        return {
            playerHealth: 100,
            monsterHealth: 100,
            specialAttackCounter: 0
        }
    },
    computed: {
        specialAttackAvailable() {
            return this.specialAttackCounter % 3 !== 0
        }
    },
    methods: {
        attackMonster() {
            this.specialAttackCounter++
            this.monsterHealth -= calculateValue(5, 12)
            this.attachPlayer()
        },
        attachPlayer() {
            this.playerHealth -= calculateValue(8, 18)
        },
        specialAttack() {
            this.specialAttackCounter++
            this.monsterHealth -= calculateValue(10, 20)
            this.attachPlayer()
        },
        healPlayer() {
            const healValue = calculateValue(12, 15)
            if (this.playerHealth + healValue > 100) this.playerHealth = 100
            else this.playerHealth += healValue
            this.attachPlayer()
        }
    }
})
app.mount('#game')