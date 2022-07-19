import { createStore } from 'vuex';

import UserModule from './modules/users/index.js';

const store = createStore({
  modules: {
    users: UserModule,
  },
});

export default store;
