export default [
    {
        name: "安装",
        path: '/install',
        component: () => import('../views/the_start/TheInstall.vue')
    },
    {
        name: "使用",
        path: '/use',
        component: () => import('../views/the_start/TheHowToUse.vue')
    },
    {
        name: "更新日志",
        path: '/update-log',
        component: () => import('../views/the_demo/TheDemoTODO.vue')
    }
]
