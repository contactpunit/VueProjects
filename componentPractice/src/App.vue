<template>
  <main>
    <user-list
      :users="filteredUsers"
      @sort-users="sortUserList"
      @search-users="filterUsers"
    ></user-list>
    <project-list :reqUser="userData"></project-list>
  </main>
</template>

<script>
import UserList from './components/users/UserList.vue';
import ProjectList from './components/projects/ProjectList.vue';
export default {
  components: {
    UserList,
    ProjectList,
  },
  provide() {
    return {
      viewProjects: this.viewUserProjects,
    };
  },
  data() {
    return {
      allUsers: null,
      userData: null,
      filteredUsers: null,
    };
  },
  created() {
    const users = this.$store.getters.getUsers;
    this.allUsers = users;
    this.filteredUsers = users;
  },
  methods: {
    sortUserList(action) {
      if (action === 'asc') {
        this.allUsers.sort((a, b) => {
          if (a.fullName > b.fullName) {
            return 1;
          }
          if (b.fullName > a.fullName) {
            return -1;
          }
          return 0;
        });
      } else if (action === 'desc') {
        this.allUsers.sort((a, b) => {
          if (a.fullName > b.fullName) {
            return -1;
          }
          if (b.fullName > a.fullName) {
            return 1;
          }
          return 0;
        });
      }
    },
    filterUsers(value) {
      const searchedUsers = this.allUsers.filter((user) =>
        user.fullName.includes(value)
      );
      this.filteredUsers = searchedUsers;
    },
    viewUserProjects(id) {
      const reqUser = this.allUsers.find((user) => user.id === id);
      if (reqUser) {
        this.userData = reqUser;
      } else return null;
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}
html {
  font-family: sans-serif;
}
body {
  margin: 0;
}

main {
  display: flex;
  justify-content: space-around;
}

button {
  font: inherit;
  border: 1px solid #00006b;
  background-color: transparent;
  color: #00006b;
  padding: 0.5rem 1.5rem;
  cursor: pointer;
  margin: 0.5rem 0.5rem 0.5rem 0;
}
button:hover,
button:active {
  background-color: #efefff;
}

button.selected {
  background-color: #00006b;
  color: white;
}
</style>