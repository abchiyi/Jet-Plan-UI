import {
    createRouter,
    createWebHashHistory
} from 'vue-router'

// TheDemo page 中的内容
import TheDemoCompontentsRouter from './TheDemoCompontentsRouter'
import TheDemoStart from './TheDemoStart'

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
        ...TheDemoCompontentsRouter,
        ...TheDemoStart
    ]
}
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export {
    TheDemoCompontentsRouter,
    TheDemoStart,
}

export default router
