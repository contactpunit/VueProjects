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
      // beforeEnter(to, from, next) {
      //   console.log(to);
      //   console.log(from);
      //   next();
      // },
    },
    { path: '/:catchAll(.*)', component: ErrorPage },
  ],
  scrollBehavior(to, from, pos) {
    if (pos) {
      return pos;
    }
    return { left: 0, top: 0 };
  },
  history: createWebHistory(),
});

// router.beforeEach((_, _2, next) => {
//   next();
// });

router.afterEach((to, from) => {
  console.log('Global after each');
  console.log(to);
  console.log(from);
});

app.use(router);

app.mount('#app');
