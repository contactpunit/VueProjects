<template>
  <the-header :title="title"></the-header>
  <stored-resources :storedResources="storedResources"></stored-resources>
</template>

<script>
import TheHeader from './components/layouts/TheHeader.vue';
import StoredResources from './components/learning-resources/StoredResources.vue';
export default {
  components: {
    StoredResources,
    TheHeader,
  },
  data() {
    return {
      title: 'Remember Me',
      storedResources: [
        {
          id: 'official-guide',
          title: 'Official Guide',
          description: 'The officialView.js doc',
          link: 'https://vuejs.org',
        },
        {
          id: 'google',
          title: 'Google',
          description: 'Learn how to google',
          link: 'https://google.com',
        },
      ],
    };
  },
};
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