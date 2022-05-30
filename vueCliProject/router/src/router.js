import { createRouter, createWebHistory } from 'vue-router';
import TeamsList from './pages/TeamsList.vue';
import UsersList from './pages/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import ErrorPage from './pages/ErrorPage.vue';
import UsersFooter from './pages/UsersFooter.vue';
import TeamsFooter from './pages/TeamsFooter.vue';

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

router.afterEach((to, from) => {
  console.log('Global after each');
  console.log(to);
  console.log(from);
});

export default router;
