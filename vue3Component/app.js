Vue.createApp({

})
.component('clickcounter', {
    template: '<button @click="count++">{{count}}</button>',
    data() {
        return {
            count: 0
        }
    }
})
.mount('#app')