import { createStore } from "vuex"

import getters from "./getters.js"
import mutations from "./mutations.js"
import actions from "./actions.js"

const store = createStore({
  state() {
    return {
      allProducts: [
        {
          id: "p1",
          title: "A Carpet",
          description: "A nice looking, maybe a little bit used carpet.",
          price: 15.99,
        },
        {
          id: "p2",
          title: "A Book",
          description: "You can read it. Maybe you should read it.",
          price: 12.99,
        },
      ],
    }
  },
  getters,
  actions,
  mutations,
})

export default store
