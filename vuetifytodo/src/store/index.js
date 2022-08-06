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
  },
  actions: {
    addTask(context, payload) {
      context.commit("addTask", payload)
    },
  },
})
