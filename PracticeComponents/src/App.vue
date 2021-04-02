<template>
    <the-header :title="header"></the-header>
    <stored-resources :resources="storedResources"></stored-resources>
</template>

<script>
import TheHeader from './components/layouts/TheHeader.vue'
import StoredResources from './components/learning-resources/StoredResources.vue'

export default {
    components: {
        StoredResources,
        TheHeader
    },
    data() {
        return {
            header: 'Remember Me',
            storedResources: [
                {
                    id: 'official-guide',
                    title: 'Official Guide',
                    description: 'The official Vue.js documentation',
                    link: 'https://vuejs.org'
                },
                {
                    id: 'google',
                    title: 'Google',
                    description: 'Google Surfing',
                    link: 'www.google.com'
                }
            ]
        }
    }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
}
</style>