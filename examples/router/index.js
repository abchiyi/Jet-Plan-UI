import {
    createRouter,
    createWebHashHistory
} from 'vue-router'

// TheDemo page 中的内容
import TheDemoCompontentsRouter from './TheDemoCompontentsRouter'
import TheDemoStart from './TheDemoStart'
import TheDemoStyle from './TheDemoStyle'
import TheDemoTool from './TheDemoTool'
import TheDemoLayout from './TheDemoLayout'


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
    scrollBehavior() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({
                    top: 0,
                    left: 0
                })
            }, 500);
        })
    }
})

export {
    TheDemoCompontentsRouter,
    TheDemoStart,
    TheDemoStyle,
    TheDemoTool,
    TheDemoLayout
}

export default router
