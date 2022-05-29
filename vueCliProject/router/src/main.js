import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import ErrorPage from './components/nav/ErrorPage.vue';
import UsersFooter from './components/users/UsersFooter.vue';
import TeamsFooter from './components/teams/TeamsFooter.vue';

const app = createApp(App);
const router = createRouter({
  routes: [
    { path: '/', redirect: '/teams' },
    // { path: '/teams', component: TeamsList, alias: '/' },
    {
      path: '/teams',
      name: 'teams',
      components: { default: TeamsList, footer: TeamsFooter },
      children: [
        {
          path: '/teams/:teamId',
          name: 'teamids',
          component: TeamMembers,
          props: true,
        },
      ],
    },
    {
      path: '/users',
      name: 'users',
      components: { default: UsersList, footer: UsersFooter },
    },
    { path: '/:catchAll(.*)', component: ErrorPage },
  ],
  history: createWebHistory(),
});

app.use(router);

app.mount('#app');
