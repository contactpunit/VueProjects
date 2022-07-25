import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      idToken: '',
      localId: '',
      expiresIn: '',
      expiryTime: '',
      isLoggedIn: false,
    };
  },
  getters: {},
  actions: {
    async addUser(_, payload) {
      let response;
      try {
        const registerUrl =
          'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=apikey';
        response = await fetch(registerUrl, {
          method: 'POST',
          body: JSON.stringify({
            email: payload.email,
            password: payload.password,
            returnSecureToken: true,
          }),
        });
      } catch (err) {
        throw new Error(
          err.message || 'User registration failed. Please try after sometime!'
        );
      }

      const data = await response.json();
      if (!response.ok) {
        throw new Error(
          data.error.message ||
            'User registration failed. Please try after sometime!'
        );
      }
    },
  },
  mutations: {
    registerUser(state, username) {
      state.username = username;
    },
  },
});

export default store;
