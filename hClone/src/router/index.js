import { createRouter, createWebHistory } from 'vue-router'
import home from '../views/home.vue'
import noHome from '../views/noHome.vue'

const routes = [
    { path: '/', component: home },
    { path: '/noHome', component: noHome }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router