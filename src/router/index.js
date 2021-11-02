import {
  createRouter,
  createWebHashHistory
} from 'vue-router'

const routes = [{
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
    children: [{
      path: 'about/',
      name: 'About',
      component: () => import('../views/About.vue')
    }]
  },
  {
    name: 'Demo',
    path: '/get-started',
    component: () => import('../views/the_demo/TheDemo.vue'),
    children: [{
        path: "",
        name: "Girde",
        component: () => import('../views/the_demo/TheDemoGirde.vue')
      },
      {
        path: "/animationdemo",
        component: () => import('../views/the_demo/the_demo_animation')
      },
      {
        path: '/progressbar',
        component: () => import('../views/the_demo/TheDemoProgress.vue')
      },
      {
        path: '/test',
        component: () => import('../views/the_demo/TheTest.vue')
      },
      {
        path: '/colors',
        component: () => import('../views/the_demo/TheDemoColors.vue')
      },
    ]
  },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
