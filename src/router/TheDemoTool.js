export default [
    {
        name: "Transition",
        path: "/transition",
        component: () => import('../views/the_demo/the_demo_animation')
    },
    {
        name: "ActionFeedback",
        path: "/action-feedback",
        component: () => import(
            '../views/the_demo/TheDemoActionFeedbacks.vue')
    },
]
