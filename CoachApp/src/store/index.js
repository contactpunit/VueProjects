import { createStore } from 'vuex';

import coachesModule from './modules/coaches/index.js';
import requestModule from './modules/requests/index.js';
import AuthModule from './modules/auth/index.js';

const store = createStore({
  modules: {
    coaches: coachesModule,
    requests: requestModule,
    auth: AuthModule,
  },
  state() {
    return {
      // apiKey: '',
    };
  },
});

export default store;
