import { createRouter, createWebHistory } from 'vue-router'
import home from '../views/home.vue'
import noHome from '../views/noHome.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: home,
    },
    {
      path: '/noHome',
      name: 'noHome',
      component: noHome,
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
    },
  ],
})
export default router
