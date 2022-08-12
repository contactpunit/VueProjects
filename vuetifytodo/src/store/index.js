import Vue from "vue"
import Vuex from "vuex"
import localbase from "localbase"

let db = new localbase("db")

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    searchText: null,
    newId: 1,
    sorting: false,
    appTitle: process.env.VUE_APP_TITLE,
    snackbar: {
      view: false,
      text: "",
    },
    tasks: [
      // {
      //   id: 1,
      //   title: "Learn Vue!",
      //   done: false,
      //   dueDate: "2022-08-08",
      // },
      // {
      //   id: 2,
      //   title: "Master Vue!",
      //   done: false,
      //   dueDate: "2022-08-04",
      // },
      // {
      //   id: 3,
      //   title: "Learn Vuetify!",
      //   done: false,
      //   dueDate: "2022-10-03",
      // },
      // {
      //   id: 4,
      //   title: "Master Nodejs",
      //   done: false,
      //   dueDate: null,
      // },
    ],
  },
  getters: {
    doSort(state) {
      return state.sorting
    },
    getAppTitle(state) {
      return state.appTitle
    },
    getSnackbarValue(state) {
      return state.snackbar
    },
    getAllTasks(state) {
      if (!state.searchText) {
        return state.tasks
      }
      return state.tasks.filter((task) => task.title.includes(state.searchText))
    },
    getNewId(state) {
      return state.newId
    },
  },
  mutations: {
    toggleSort(state) {
      state.sorting = !state.sorting
    },
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
    saveDate(state, payload) {
      const task = state.tasks.find((t) => t.id === payload.id)
      if (task) {
        task.dueDate = payload.date
      }
    },
    setSearchText(state, payload) {
      state.searchText = payload
    },
  },
  actions: {
    toggleSort(context) {
      context.commit("toggleSort")
    },
    setSearchText(context, payload) {
      context.commit("setSearchText", payload)
    },
    editTitle(context, payload) {
      context.commit("editTask", payload)
      context.commit("showSnackbar", "Task Edited!")
    },
    async addTask(context, payload) {
      try {
        context.commit("addTask", payload)
        await db.collection("tasks").add(payload)
        context.commit("showSnackbar", "New Task Added!")
      } catch (err) {
        context.commit("showSnackbar", `Error: ${err.message}`)
      }
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
    saveDate(context, payload) {
      context.commit("saveDate", payload)
    },
  },
})
