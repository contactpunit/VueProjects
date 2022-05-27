<template>
  <base-card>
    <base-button
      @click="setSelectedTab('stored-resources')"
      :mode="setStoredResMode"
    >
      Stored Resources
    </base-button>
    <base-button @click="setSelectedTab('add-resource')" :mode="setAddResMode"
      >Add Resources</base-button
    >
  </base-card>
  <keep-alive>
    <component :is="selectedTab"></component>
  </keep-alive>
</template>

<script>
import StoredResources from './StoredResources.vue';
import AddResource from './AddResource.vue';

export default {
  components: {
    StoredResources,
    AddResource,
  },
  computed: {
    setStoredResMode() {
      return this.selectedTab === 'stored-resources' ? null : 'flat';
    },
    setAddResMode() {
      return this.selectedTab === 'add-resource' ? null : 'flat';
    },
  },
  provide() {
    return {
      storedResources: this.storedResources,
      addResources: this.addResources,
      removeResource: this.removeResource,
    };
  },
  data() {
    return {
      selectedTab: 'stored-resources',
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
  methods: {
    setSelectedTab(tab) {
      this.selectedTab = tab;
    },
    addResources(title, desc, link) {
      const tempResource = {
        id: new Date().toISOString(),
        title,
        link,
        description: desc,
      };
      this.storedResources.push(tempResource);
      this.selectedTab = 'stored-resources';
    },
    removeResource(id) {
      const idx = this.storedResources.findIndex((res) => res.id === id);
      if (idx !== null && idx !== 'undefined')
        this.storedResources.splice(idx, 1);
    },
  },
};
</script>