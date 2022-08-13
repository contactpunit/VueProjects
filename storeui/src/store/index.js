import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    snackbar: {
      show: false,
      variant: "success",
      message: "Success! Item added to the cart.",
    },
    cart: [],
    products: [
      {
        image:
          "https://raw.githubusercontent.com/gwenf/vuetify-responsive/master/public/img/products/product-1.jpg",
        name: "Nintendo Switch",
        price: 299.99,
      },
      {
        image:
          "https://raw.githubusercontent.com/gwenf/vuetify-responsive/master/public/img/products/product-2.jpg",
        name: "Gameboy Mug",
        price: 19.99,
      },
      {
        image:
          "https://raw.githubusercontent.com/gwenf/vuetify-responsive/master/public/img/products/product-3.jpg",
        name: "Family Computer",
        price: 70,
      },
      {
        image:
          "https://raw.githubusercontent.com/gwenf/vuetify-responsive/master/public/img/products/product-4.jpg",
        name: "Jeopardy Game",
        price: 30,
      },
      {
        image:
          "https://raw.githubusercontent.com/gwenf/vuetify-responsive/master/public/img/products/product-5.jpg",
        name: "Game Cube",
        price: 99.99,
      },
      {
        image:
          "https://raw.githubusercontent.com/gwenf/vuetify-responsive/master/public/img/products/product-6.jpg",
        name: "Gameboy Color",
        price: 45,
      },
    ],
  },
  getters: {},
  mutations: {
    updateCart() {
      //
    },
    showSnackbar(state) {
      state.snackbar.show = !state.snackbar.show
    },
  },
  actions: {
    updateCart(context, payload) {
      context.commit("updateCart", payload)
    },
    showSnackbar(context) {
      context.commit("showSnackbar")
    },
  },
})
