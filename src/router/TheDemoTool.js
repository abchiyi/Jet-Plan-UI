export default [
    {
        name: "test",
        path: '/test',
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
