export default [

    {
        name: "Avatar",
        path: "/avatar",
        component: () => import(
            '../views/the_demo/TheDemoAvatar.vue')
    },
    {
        name: "Alert",
        path: "/alert",
        component: () => import(
            '../views/the_demo/TheDemoAlert.vue'),
        index: [
            {
                name: 'Alert',
                to: '#doc-j-alert'
            },
            {
                name: 'AlertData',
                to: '#doc-alert-data'
            },
        ]
    },
    {
        name: "Bubble",
        path: "/bubble",
        component: () => import(
            '../views/the_demo/TheDemoBubble.vue')
    },
    {
        name: "Card",
        path: "/card",
        component: () => import(
            '../views/the_demo/TheDemoCard.vue')
    },
    {
        name: "CodeBox",
        path: "/CodeBox",
        component: () => import(
            '../views/the_demo/TheDemoCodeBox.vue')
    },
    {
        name: 'Loading',
        path: '/loading',
        component: () => import('../views/the_demo/TheDemoLoading.vue')
    },
    {
        name: 'Test',
        path: '/test',
        component: () => import('../views/the_demo/TheTest.vue'),
        index: [{
            name: 'div1',
            to: "#div1"
        },
        {
            name: 'div2',
            to: "#div2"
        },
        {
            name: 'div3',
            to: "#div3"
        },
        {
            name: 'div4',
            to: "#div4"
        },
        ]
    },
    {
        name: 'Buttons',
        path: '/buttons',
        component: () => import('../views/the_demo/TheDemoButtons.vue')
    },
    {
        name: 'Inputs',
        path: '/inputs',
        index: [{
            name: 'Input',
            to: "#input"
        },
        {
            name: 'Checkbox',
            to: "#checkbox"
        },
        {
            name: 'Radio',
            to: "#radio"
        }, {
            name: 'Switch',
            to: "#switch"
        }, {
            name: 'Slider',
            to: "#slider"
        }
        ],
        component: () => import('../views/the_demo/the_demo_inputs/TheDemoInputs.vue')
    }, {
        name: "Table",
        path: "/table",
        component: () => import('../views/the_demo/TheDemoTable.vue')
    },
    {
        name: 'All Themes',
        path: '/all-themes',
        component: () => import('../views/the_demo/TheDemoAllThemes.vue')
    }
]
