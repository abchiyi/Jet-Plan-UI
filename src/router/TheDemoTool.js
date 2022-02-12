export default [
    {
        name: "Transition",
        path: "/transition",
        component: () => import('../views/the_demo/the_demo_animation')
    },
    {
        name: "ActionFeedback",
        path: "/action-feedback",
        component: () => import('../views/the_demo/TheDemoActionFeedbacks.vue')
    },
    {
        name: "Directives",
        path: '/directives',
        component: () => import('../views/the_demo/TheDemoTODO.vue'),
        index: [
            {
                name: 'test',
                to: '#test'
            }
        ]
    },
    {
        name: "ToolFunction",
        path: '/tool-function',
        component: () => import('../views/the_demo/TheDemoTODO.vue'),
        index: [
            {
                name: 'test',
                to: '#test'
            }
        ]
    }
]
