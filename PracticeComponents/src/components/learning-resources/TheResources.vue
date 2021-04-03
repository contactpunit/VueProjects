<template>
    <base-card>
    <base-button @click="setSelectedTab('stored-resources')" :mode="storedResourcesMode">Stored Resources</base-button>
    <base-button @click="setSelectedTab('add-resource')" :mode="addResourceMode">Add Resource</base-button>
    </base-card>
    <keep-alive>
    <component :is="selectedTab"></component>
    </keep-alive>
</template>

<script>
import StoredResources from './StoredResources.vue'
import AddResource from './AddResource.vue'

export default {
    components: {
        StoredResources,
        AddResource
    },
    data() {
        return {
            selectedTab: 'stored-resources',
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
    },
    computed: {
        storedResourcesMode() {
            return this.selectedTab === 'stored-resources' ? null : 'flat'
        },
        addResourceMode() {
            return this.selectedTab === 'add-resource' ? null : 'flat'
        }
    },
    methods: {
        setSelectedTab(tab) {
            this.selectedTab = tab
        },
        addResource(title, description, link) {
            const newResource = {
                id: new Date().toString(),
                title,
                description,
                link
            }
            this.storedResources.unshift(newResource)
            this.selectedTab = 'stored-resources'
        },
        removeResource(id) {
            const resource = this.storedResources.find(res => res.id === id)
            this.storedResources.splice(resource, 1)
        }
    },
    provide() {
        return {
            resources: this.storedResources,
            addResource: this.addResource,
            removeResource: this.removeResource
        }
    }
}
</script>
