<template>
  <base-dialog v-if="showError" :title="title" :dialogMessage="dialogMessage">
  </base-dialog>
  <add-user @popDialog="popUpDialog"></add-user>
  <delete-user @popDialog="popUpDialog"></delete-user>
</template>

<script>
import AddUser from './components/AddUser.vue';
import DeleteUser from './components/DeleteUser.vue';

export default {
  components: {
    AddUser,
    DeleteUser,
  },
  data() {
    return {
      title: null,
      dialogMessage: null,
      showError: false,
    };
  },
  provide() {
    return {
      closeDialog: this.closeDialog,
    };
  },
  methods: {
    closeDialog() {
      this.showError = false;
    },
    popUpDialog(action) {
      this.showError = true;
      if (action === 'add') {
        this.title = 'Add User?';
        this.dialogMessage = 'Do you want to continue adding a user?';
      } else if (action === 'delete') {
        this.title = 'Delete User?';
        this.dialogMessage = 'Do you want to continue deleting a user?';
      }
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
  width: 40rem;
  margin: 3rem auto;
}

section {
  margin: 2rem auto;
  border: 1px solid #ccc;
  border-radius: 12px;
  padding: 1rem;
}

button {
  font: inherit;
  background-color: #310131;
  border: 1px solid #310131;
  border-radius: 8px;
  color: white;
  padding: 0.5rem 1.5rem;
  cursor: pointer;
}

button:hover,
button:active {
  background-color: #770e77;
  border-color: #770e77;
}
</style>