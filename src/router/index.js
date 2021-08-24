import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../Home.vue')
  },
  // {
  //   path: '/girdedemo',
  //   name: 'gird',
  //   component: () => import('../views/theDemoPages/girdeDemo.vue')
  // },
  {
    path: '/get-started/:componentName',
    name: '',
    component: () => import('../views/theDemoPages/deomPage.vue')
  },
  // {
  //   path: '/animationdemo',
  //   name: 'animationdemo',
  //   component: () => import('../views/theDemoPages/animationDemo')
  // },
  // {
  //   path: '/progressbar',
  //   name: 'progressbar',
  //   component: () => import('../views/progressDemo')
  // },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/theDemoPages/About.vue')
  // }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
