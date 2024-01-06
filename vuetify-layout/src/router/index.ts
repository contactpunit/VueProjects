// routes
import {createRouter, createWebHistory} from 'vue-router'

const router = createRouter({
  routes: [
    {
      path: '/', 
      component: () =>import('@/pages/ApplicationLayout.vue'),
      children: [
        {
          path: "",
          name: "Home",
          component: () =>
            import(/* webpackChunkName: "home" */ "@/components/HelloWorld.vue"),
        },
        {
          path: '/posts',
          name: 'Posts',
          component: ()=> import('@/components/UserPosts.vue')
        },
        {
          path: '/comments',
          name: 'Comments',
          component: () => import('@/components/UserComments.vue')
        }
      ]
    }
  ],
  history: createWebHistory()
})

export default router
