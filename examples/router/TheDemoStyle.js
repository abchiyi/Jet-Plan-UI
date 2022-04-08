export default [{
        name: "主题",
        path: '/demo/theme',
        component: () => import('../views/the_demo/the_demo_style/TheDemoTheme.vue'),
        index: [{
                name: '切换主题',
                to: '#theme-switcher'
            },
            {
                name: '使用主题',
                to: '#theme-install-use'
            },
            {
                name: "创建主题",
                to: '#theme-create'
            },
            {
                name: "自动切换深色主题",
                to: '#theme-auto-dark-mode'
            }

        ]
    },
    {
        name: '色彩',
        path: '/color',
        component: () => import('../views/the_demo/the_demo_style/TheDemoColor.vue')
    },
    {
        name: "字体",
        path: '/fonts',
        component: () => import('../views/the_demo/TheDemoTODO.vue')
    },
]
