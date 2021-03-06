export default [{
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
        component: () => import('../views/the_demo/the_demo_directives/DemoDirectives.vue'),
        index: [{
                name: 'focus',
                to: '#focus'
            },
            {
                name: 'ScrollTo',
                to: '#scroll-to'
            },
            {
                name: 'shadow',
                to: '#shadow'
            },
            {
                name: 'ReScreenSize',
                to: '#re-screen-size'
            },
            {
                name: 'AutoColor',
                to: '#auto-color'
            }
        ]
    },
    {
        name: "ToolFunction",
        path: '/tool-function',
        component: () => import('../views/the_demo/the_demo_tools/DemoTools.vue'),
        index: [{
                name: 'TimeActionLimit',
                to: '#time-action-limit'
            },
            {
                name: 'scrollTo',
                to: '#demo-scroll-to'
            },
            {
                name: "shadowPainter",
                to: "#demo-shadow-painter"
            }
        ]
    }
]
