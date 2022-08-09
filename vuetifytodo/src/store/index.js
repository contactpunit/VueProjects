import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    newId: 1,
    snackbar: {
      view: false,
      text: "",
    },
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
    getSnackbarValue(state) {
      return state.snackbar
    },
    getAllTasks(state) {
      return state.tasks
    },
    getNewId(state) {
      return state.newId
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
    appendId(state) {
      state.newId += 1
    },
    setNewIdValue(state, value) {
      state.newId = +value
    },
    showSnackbar(state, text) {
      state.snackbar.view = true
      state.snackbar.text = text
    },
    resetSnackbar(state) {
      state.snackbar.view = false
      state.snackbar.text = ""
    },
    editTask(state, payload) {
      const task = state.tasks.find((task) => task.id === payload.id)
      state.tasks[task.id - 1].title = payload.title
    },
  },
  actions: {
    editTitle(context, payload) {
      context.commit("editTask", payload)
    },
    addTask(context, payload) {
      context.commit("addTask", payload)
      context.commit("showSnackbar", "New Task Added!")
    },
    deleteTask(context, id) {
      context.commit("deleteTask", id)
      context.commit("showSnackbar", "Task Deleted!")
    },
    selectChange(context, id) {
      context.commit("selectChange", id)
    },
    appendId(context) {
      context.commit("appendId")
    },
    setNewIdValue(context, value) {
      context.commit("setNewIdValue", value)
    },
    showSnackbar(context) {
      context.commit("showSnackbar", text)
    },
  },
})
