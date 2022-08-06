import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks: [
      {
        id: 1,
        title: "Learn Vue!",
        done: false,
      },
      {
        id: 2,
        title: "Master Vue!",
        done: false,
      },
      {
        id: 3,
        title: "Learn Vuetify!",
        done: false,
      },
      {
        id: 4,
        title: "Master Nodejs",
        done: false,
      },
    ],
  },
  getters: {
    getAllTasks(state) {
      return state.tasks
    },
  },
  mutations: {
    addTask(state, payload) {
      state.tasks.push(payload)
    },
    deleteTask(state, id) {
      const indexId = state.tasks.findIndex((task) => task.id === id)
      state.tasks.splice(indexId, 1)
    },
    selectChange(state, id) {
      const selectedTask = state.tasks.find((task) => task.id === id)
      selectedTask.done = !selectedTask.done
    },
  },
  actions: {
    addTask(context, payload) {
      context.commit("addTask", payload)
    },
    deleteTask(context, id) {
      context.commit("deleteTask", id)
    },
    selectChange(context, id) {
      context.commit("selectChange", id)
    },
  },
})
