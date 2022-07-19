<template>
  <base-card>
    <h2>Active Users</h2>
    <base-search @search="searchUsers"></base-search>
    <button @click="sortUsers('asc')">Sort Ascending</button>
    <button @click="sortUsers('desc')">Sort Descending</button>
    <ul v-for="user in users" :key="user.id">
      <user-item
        :fullName="user.fullName"
        :projects="user.projects"
        :id="user.id"
      ></user-item>
    </ul>
  </base-card>
</template>

<script>
import UserItem from './UserItem.vue';

export default {
  components: {
    UserItem,
  },
  props: ['users'],
  methods: {
    sortUsers(action) {
      this.$emit('sort-users', action);
    },
    searchUsers(value) {
      this.$emit('search-users', value);
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>