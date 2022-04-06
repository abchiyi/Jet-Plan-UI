export default [{
        name: "主题",
        path: '/theme',
        component: () => import('../views/the_demo/the_demo_style/TheDemoColors.vue'),
        index: [{
                name: '$jetTheme',
                to: '#jet-theme'
            },
            {
                name: '定制主题',
                to: '#customize-theme'
            }
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
