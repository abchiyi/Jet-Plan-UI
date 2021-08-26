import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
    children: [
      {
        path: 'about/',
        name: 'About',
        component: () => import('../views/About.vue')
      }
    ]
  },
  {
    name: 'Demo',
    path: '/get-started',
    component: () => import('../views/the-demo/TheDemo.vue'),
    children: [
      {
        path: "",
        name: "Girde",
        component: () => import('../views/the-demo/TheDemoGirde.vue')
      },
      {
        path: "animationdemo/",
        component: () => import('../views/the-demo/The-demo-animation')
      },
      {
        path: 'progressbar/',
        component: () => import('../views/the-demo/TheDemoProgress.vue')
      },
    ]
  },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
