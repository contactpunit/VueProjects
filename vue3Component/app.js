Vue.createApp({

})
.component('clickcounter', {
    template: '#countertemplate',
    data() {
        return {
            count: 0
        }
    }
})
.mount('#app')