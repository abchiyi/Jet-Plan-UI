import {
    createRouter,
    createWebHashHistory
} from 'vue-router'

// TheDemo page 中的内容
import TheDemoCompontentsRouter from './TheDemoCompontentsRouter'
import TheDemoStart from './TheDemoStart'
import TheDemoStyle from './TheDemoStyle'
import TheDemoTool from './TheDemoTool'

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
    // DefaultPage
    path: TheDemoCompontentsRouter[0].path,
    component: () => import('../views/the_demo/TheDemo.vue'),
    children: [
        ...TheDemoCompontentsRouter,
        ...TheDemoStart,
        ...TheDemoStyle,
        ...TheDemoTool,
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
    TheDemoStyle,
    TheDemoTool
}

export default router
