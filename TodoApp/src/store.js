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
  },
  mutations: {
    addTodo(state, payload) {
      state.todos.push(payload.todo);
    },
  },
});

export default store;
