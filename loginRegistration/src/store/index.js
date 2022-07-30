import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      idToken: '',
      localId: '',
      expiryTime: '',
      isLoggedIn: false,
      email: '',
      fullname: '',
    };
  },
  getters: {
    userLoggedIn(state) {
      return state.isLoggedIn;
    },
    getFullName(state) {
      console.log(state.isLoggedIn);
      if (state.isLoggedIn) {
        return state.fullname;
      }
      return '';
    },
  },
  actions: {
    async loginUser(context, payload) {
      let response;
      try {
        const loginUrl =
          'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=apikey';
        response = await fetch(loginUrl, {
          method: 'POST',
          body: JSON.stringify({
            email: payload.email,
            password: payload.password,
            returnSecureToken: true,
          }),
        });
      } catch (err) {
        console.log(err.message);
        return;
      }
      const data = await response.json();
      if (!response.ok) {
        console.log(data.error.message);
        return;
      } else {
        const { expiresIn, localId, idToken } = data;
        const expiryTime = new Date(
          new Date().setTime(new Date().getTime() + +expiresIn * 1000)
        );

        localStorage.setItem('localId', localId);
        localStorage.setItem('idToken', idToken);
        localStorage.setItem('expiryTime', expiryTime);
        localStorage.setItem('fullname', payload.email.split('@')[0]);
        localStorage.setItem('isLoggedIn', true);

        context.commit('loginUser', {
          expiryTime,
          localId,
          idToken,
          email: payload.email,
          fullname: payload.email.split('@')[0],
        });
        console.log(context.getters.userLoggedIn);
      }
    },
    async logout(context) {
      context.commit('logout');
    },
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
    logout(state) {
      console.log(' i am invoke');
      localStorage.removeItem('idToken');
      localStorage.removeItem('localId');
      localStorage.removeItem('isLoggedIn');
      localStorage.removeItem('expiryTime');
      localStorage.removeItem('email');
      localStorage.removeItem('fullname');
      state.idToken = '';
      state.localId = '';
      state.expiryTime = '';
      state.isLoggedIn = false;
      state.email = '';
      state.fullname = '';
    },
    loginUser(state, payload) {
      state.idToken = payload.idToken;
      state.localId = payload.localId;
      state.expiryTime = payload.expiryTime;
      state.isLoggedIn = true;
      state.email = payload.email;
      state.fullname = payload.fullname;
    },
  },
});

export default store;
