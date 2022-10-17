import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: () => import('../views/index.vue')
  },
  {
    path: '/home/total',
    name: 'total',
    component: () => import('../views/home/total.vue')
  },
  {
    path: '/home/enter',
    name: 'enter',
    component: () => import('../views/home/enter.vue')
  },
  {
    path: '/home/department',
    name: 'department',
    component: () => import('../views/home/department.vue')
  },
  {
    path: '/home/test',
    name: 'test',
    component: () => import('../views/home/test.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
