import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      todos: [],
    };
  },
  getters: {
    getAllTodos(state) {
      return state.todos;
    },
  },
  actions: {
    addTodo(context, payload) {
      context.commit('addTodo', payload);
    },
    deleteTodo(context, payload) {
      context.commit('deleteTodo', payload);
    },
  },
  mutations: {
    addTodo(state, payload) {
      state.todos.push(payload.todo);
    },
    deleteTodo(state, payload) {
      state.todos.splice(payload, 1);
    },
  },
});

export default store;
