Vue.createApp({
    data() {
        return {
            username: 'contactpunit',
            name: null,
            created_at: null,
            followers: 0,
            avatarUrl: '',
            me: null,
            bio: ''
        }
    },
    async created() {
        const userProfileData = await axios.get(`https://api.github.com/users/${this.username}`)
        if(userProfileData.status === 200 ){
            const userProfile = userProfileData.data
            this.name = userProfile.name
            this.created_at = userProfile.created_at
            this.followers = userProfile.followers
            this.avatarUrl = userProfile.avatar_url
            this.me = userProfile.name
            this.bio = userProfile.bio || 'Punit is a software Engineer'
        }
    }
})
.component('github-user-card', {
    template: '#github-user-card-template',
    props: {
        name: String,
        created_at: String,
        followers: Number,
        avatarUrl: String,
        bio: String
    }
})
.mount('#app')