import Vue from 'vue'
import Router from 'vue-router'

import Home from './views/home'

Vue.use(Router)

const router = new Router({
  mode: "history",
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
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/about'),
    },
    {
      path: '*',
      component: () =>import('./views/404')
    }
  ]
})

export default router