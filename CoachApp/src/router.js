import { createRouter, createWebHistory } from 'vue-router';

import CoachesList from './pages/coaches/CoachesList.vue';
import CoachDetail from './pages/coaches/CoachDetail.vue';
import CoachRegistration from './pages/coaches/CoachRegistration.vue';
import RequestsReceived from './pages/requests/RequestsReceived.vue';
import ContactCoach from './pages/requests/ContactCoach.vue';
import CatchAll from './pages/CatchAll.vue';
import UserAuth from './pages/auth/UserAuth.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/coaches' },
    { path: '/coaches', component: CoachesList },
    { path: '/auth', component: UserAuth },
    {
      path: '/coaches/:id',
      props: true,
      component: CoachDetail,
      children: [{ path: 'contact', component: ContactCoach }],
    },
    { path: '/register', component: CoachRegistration },
    { path: '/requests', component: RequestsReceived },
    { path: '/:catchall(.*)', component: CatchAll },
  ],
});

export default router;
