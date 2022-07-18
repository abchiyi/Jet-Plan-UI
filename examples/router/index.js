import {
    createRouter,
    createWebHashHistory
} from 'vue-router'

import { scrollBehaviorOfVueRouter } from "@ui/tool/lib"

// TheDemo page 中的内容
import TheDemoCompontentsRouter from './RouterCompontents'
import TheDemoStart from './RouterStart'
import TheDemoStyle from './RouterStyle'
import TheDemoTool from './RouterTool'
import TheDemoLayout from './RouterLayout'

const defaultPage = TheDemoStart[0].path

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
    name: "Doc",
    path: '/get-started',
    // Demo default page
    redirect: defaultPage,
    component: () => import('../views/the_demo/TheDemo.vue'),
    children: [
        ...TheDemoCompontentsRouter,
        ...TheDemoStart,
        ...TheDemoStyle,
        ...TheDemoTool,
        ...TheDemoLayout,
    ]
}
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
    scrollBehavior: scrollBehaviorOfVueRouter(300, 100)
})

export {
    TheDemoCompontentsRouter,
    TheDemoStart,
    TheDemoStyle,
    TheDemoTool,
    TheDemoLayout
}

export default router
