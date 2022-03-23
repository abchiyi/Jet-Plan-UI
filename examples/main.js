// 自定义 fonts, css, style
import './assets'

import {
    resolveComponent,
    createApp,
    h
} from 'vue'

import ui from '@ui'
import { theme } from '@ui'
import themeDefault from '@theme'

// Custom compents
import router from './router'
import common from './common'

import {
    redColorModeCookie,
} from './common'

// Set theme
theme.use(themeDefault, ...redColorModeCookie())

const BASE_COMPONENT = {
    name: "mousseUI-home-page",
    render: () => h(resolveComponent('router-view'))
}

// Go
createApp(BASE_COMPONENT)
    .use(common)
    .use(router)
    .use(ui)
    .mount('#app')
