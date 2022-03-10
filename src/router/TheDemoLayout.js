export default [
    {
        path: "/gride",
        name: "Gride",
        component: () => import('../views/the_demo/the_demo_layout/TheDemoGirde.vue'),
    },
    {
        path: "/control-bar",
        name: "ControlBar",
        component: () => import('../views/the_demo/the_demo_layout/TheDemoControlBar.vue'),
    },
    {
        path: "/full-screen-mask",
        name: "FullscreenMask",
        component: () => import('../views/the_demo/the_demo_layout/TheFullscreenMask.vue'),
    },
    {
        path: "/pages",
        name: "Pages",
        component: () => import('../views/the_demo/the_demo_layout/TheDemoPages.vue'),
    },
    {
        path: "/header",
        name: "Header",
        component: () => import('../views/the_demo/the_demo_layout/TheDemoHeader.vue'),
    },
    {
        path: "/sidebar",
        name: "Sidebar",
        component: () => import('../views/the_demo/the_demo_layout/TheDemoSidebar.vue'),
    },

]
