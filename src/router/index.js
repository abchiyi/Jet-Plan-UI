import {
    createRouter,
    createWebHashHistory
} from 'vue-router'
const TheDemo = {
    name: 'Demo',
    path: '/get-started',
    component: () => import('../views/the_demo/TheDemo.vue'),
    children: [{
            path: "/get-started",
            name: "Gride",
            component: () => import('../views/the_demo/TheDemoGirde.vue')
        },
        {
            name: "AnimationDemo",
            path: "/animationdemo",
            component: () => import('../views/the_demo/the_demo_animation')
        },
        {
            name: "ActionFeedback",
            path: "/action-feedback",
            component: () => import(
                '../views/the_demo/TheDemoActionFeedbacks.vue')
        },
        {
            name: "Card",
            path: "/card",
            component: () => import(
                '../views/the_demo/TheDemoCard.vue')
        },
        {
            name: "codebox",
            path: "/codebox",
            component: () => import(
                '../views/the_demo/TheDemoCodebox.vue')
        },
        {
            name: 'Progressbar',
            path: '/progressbar',
            component: () => import('../views/the_demo/TheDemoProgress.vue')
        },
        {
            name: 'Test',
            path: '/test',
            component: () => import('../views/the_demo/TheTest.vue')
        },
        {
            name: 'Colors',
            path: '/colors',
            component: () => import('../views/the_demo/TheDemoColors.vue')
        },
        {
            name: 'Buttons',
            path: '/buttons',
            component: () => import('../views/the_demo/TheDemoButtons.vue')
        },
        {
            name: 'Inputs',
            path: '/inputs',
            component: () => import('../views/the_demo/the_demo_inputs/TheDemoInputs.vue')
        },
    ]
}
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
    TheDemo

]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export {
    TheDemo
}

export default router
