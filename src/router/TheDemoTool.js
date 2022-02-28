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
        component: () => import('../views/the_demo/the_demo_directives/DemoDirectives.vue'),
        index: [
            {
                name: 'focus',
                to: '#focus'
            },
            // TODO▾ 未完成的指令示例
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
            }
        ]
    },
    {
        name: "ToolFunction",
        path: '/tool-function',
        component: () => import('../views/the_demo/the_demo_tools/DemoTools.vue'),
        index: [
            {
                name: 'TimeActionLimit',
                to: '#time-action-limit'
            }
        ]
    }
]
