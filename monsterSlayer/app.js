function getRandomValue(min, max) {
    return Math.floor(Math.random() * (max - min)) + min
}

const app = Vue.createApp({
    data() {
        return {
            monsterHealth: 100,
            playerHealth: 100
        }
    },
    methods: {
        attackMonster() {
            const attackValue = getRandomValue(12, 5)
            this.monsterHealth = this.monsterHealth - attackValue
            this.strikeBack()
        },
        strikeBack() {
            const strikeValue = getRandomValue(10, 8)
            this.playerHealth = this.playerHealth - strikeValue
        }
    },
    computed: {
        monsterStyles() {
            return { width: this.monsterHealth + '%' }
        },
        playerStyles() {
            return { width: this.playerHealth + '%' }
        }
    }

})

app.mount('#game')