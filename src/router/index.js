import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Diagnosis from '../components/Diagnosis.vue'
import NotFound from '../components/NotFound.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/diagnosis',
    name: 'Diagnosis',
    component: Diagnosis
  },
  {
    path: '/:pathMatch(.*)',
    name: 'NotFound',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router