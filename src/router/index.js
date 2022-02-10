import {
    createRouter,
    createWebHashHistory
} from 'vue-router'


import TheDemoCompontentsRouter from './TheDemoCompontentsRouter'

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
    name: "Demo",
    path: TheDemoCompontentsRouter[0].path,
    component: () => import('../views/the_demo/TheDemo.vue'),
    children: [
        ...TheDemoCompontentsRouter
    ]
}
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export {
    TheDemoCompontentsRouter
}

export default router
