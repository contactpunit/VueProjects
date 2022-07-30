import { createRouter, createWebHistory } from 'vue-router';

import LoginPage from './components/pages/LoginPage.vue';
import RegisterPage from './components/pages/RegisterPage.vue';
import HomePage from './components/pages/HomePage.vue';

import store from './store/index.js';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: HomePage,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/login',
      component: LoginPage,
      meta: {
        requiresAuth: false,
      },
    },
    {
      path: '/register',
      component: RegisterPage,
      meta: {
        requiresAuth: false,
      },
    },
  ],
});

router.beforeEach((to, _, next) => {
  if (to.meta.requiresAuth && !store.getters.userLoggedIn) {
    next('/login');
  } else {
    next();
  }
});

export default router;
