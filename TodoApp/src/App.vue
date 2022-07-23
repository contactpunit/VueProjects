<template>
  <div class="container">
    <h2>My Todo App</h2>
    <add-todo @add-todo="addData"></add-todo>
  </div>
  <div class="container">
    <h3>ToDo List</h3>
    <todo-list v-for="todo in getTodos" :key="todo" :todo="todo"></todo-list>
  </div>
</template>

<script>
import AddTodo from './components/AddTodo.vue';
import TodoList from './components/TodoList.vue';

export default {
  components: {
    AddTodo,
    TodoList,
  },
  computed: {
    getTodos() {
      return this.$store.getters.getAllTodos;
    },
  },
  methods: {
    addData(text) {
      this.$store.dispatch('addTodo', { todo: text });
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

h2 {
  font-weight: 700;
  font-size: 28px;
  text-align: center;
  display: block;
  font-size: 2em;
  margin-block-start: 0.67em;
  margin-block-end: 0.67em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
}

body {
  margin: 0;
  text-align: center;
}

.container {
  margin: 3rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  text-align: center;
}
</style>