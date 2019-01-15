import Vue from 'vue'
import Router from 'vue-router'

import Home from './views/home'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/login'),
    }
  ]
})

export default router