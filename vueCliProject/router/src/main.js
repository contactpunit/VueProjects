import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import ErrorPage from './components/nav/ErrorPage.vue';

const app = createApp(App);
const router = createRouter({
  routes: [
    { path: '/', redirect: '/teams' },
    // { path: '/teams', component: TeamsList, alias: '/' },
    {
      path: '/teams',
      component: TeamsList,
      children: [
        { path: '/teams/:teamId', component: TeamMembers, props: true },
      ],
    },
    { path: '/users', component: UsersList },
    // { path: '/teams/:teamId', component: TeamMembers, props: true },
    { path: '/:catchAll(.*)', component: ErrorPage },
  ],
  history: createWebHistory(),
});

app.use(router);

app.mount('#app');
