import { createRouter, createWebHistory } from 'vue-router'
import Register from '../views/Register.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'register',
      component: Register
    },
    {
      path: '/user',
      name: 'users',
      component: () => import('../views/Users.vue')
    }
  ]
})

export default router
