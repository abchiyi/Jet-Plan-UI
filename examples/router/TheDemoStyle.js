export default [{
        name: "主题",
        path: '/theme',
        component: () => import('../views/the_demo/the_demo_style/TheDemoColors.vue'),
        index: [{
                name: '切换主题',
                to: '#theme-switcher'
            },
            {
                name: '使用主题',
                to: '#theme-install-use'
            },

        ]
    },
    {
        name: '色彩',
        path: '/color',
        component: () => import('../views/the_demo/TheDemoTODO.vue')
    },
    {
        name: "字体",
        path: '/fonts',
        component: () => import('../views/the_demo/TheDemoTODO.vue')
    },
]
