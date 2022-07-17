let timer;

export default {
  async signup(context, payload) {
    return context.dispatch('auth', {
      ...payload,
      mode: 'signup',
    });
  },

  async login(context, payload) {
    return context.dispatch('auth', {
      ...payload,
      mode: 'login',
    });
  },

  async logout(context) {
    const token = localStorage.getItem('token');
    if (token) {
      localStorage.removeItem('token');
      localStorage.removeItem('userId');
    }
    clearTimeout(timer);
    context.commit('setUser', {
      token: null,
      userId: null,
    });
  },

  autoLogin(context) {
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('userId');
    const expirationDate = localStorage.getItem();
    if (token && userId) {
      context.commit('setUser', {
        token,
        userId,
      });
    }
    const expiresIn = +expirationDate - new Date().getTime();
    if (expiresIn < 0) {
      return;
    }

    timer = setTimeout(() => {
      context.dispatch('logout');
    }, expiresIn);
  },

  async auth(context, payload) {
    const mode = payload.mode;
    let url;
    if (mode === 'signup') {
      url =
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=apikey';
    } else {
      url =
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=apikey';
    }
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        email: payload.email,
        password: payload.password,
        returnSecureToken: true,
      }),
    });
    const resData = await response.json();
    if (!response.ok) {
      throw new Error(resData.message || 'Failed to authenticate');
    }

    const expiresIn = +resData.expiresIn * 1000;
    const expirationDate = expiresIn + new Date().getTime();

    localStorage.setItem('token', resData.idToken);
    localStorage.setItem('userId', resData.localId);
    localStorage.setItem('tokenExpiration', expirationDate);

    timer = setTimeout(() => {
      context.dispatch('logout');
    }, expiresIn);

    context.commit('setUser', {
      token: resData.idToken,
      userId: resData.localId,
    });
  },
};
