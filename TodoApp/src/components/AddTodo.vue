<template>
  <form @submit.prevent="submitForm">
    <div>
      <label for="name">Todo</label>
      <input type="text" name="todo" v-model="todo" />
      <button>Add ToDo</button>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      todo: '',
    };
  },
  methods: {
    submitForm() {
      this.$emit('add-todo', this.todo);
      this.todo = '';
    },
  },
};
</script>

<style scoped>
h3 {
  font-size: 14px;
  text-align: center;
  display: block;
  font-size: 1.5em;
  margin-block-start: 0.67em;
  margin-block-end: 0.67em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
}

button {
  font: inherit;
  border: 1px solid #88005b;
  background-color: #88005b;
  color: white;
  padding: 1rem 2rem;
  border-radius: 12px;
  margin: 1rem;
  width: 12rem;
  cursor: pointer;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}

button:focus {
  outline: none;
}

button:hover,
button:active {
  background-color: #af0a78;
  border-color: #af0a78;
  box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.26);
}

input {
  height: 48px;
  box-shadow: none;
  outline: none;
  padding-left: 12px;
  padding-right: 12px;
  border-radius: 6px;
  font-size: 18px;
  margin-top: 6px;
  margin-bottom: 12px;
}

label {
  font-weight: bold;
  display: block;
}
</style>