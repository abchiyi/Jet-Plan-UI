export default [
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
    {
        name: "主题",
        path: '/theme',
        index: [
            {
                name: 'test',
                to: "#test"
            },
            {
                name: 'test',
                to: "#test"
            },
            {
                name: 'test',
                to: "#test"
            },
        ],
        component: () => import('../views/the_demo/TheDemoTODO.vue')
    }
]
