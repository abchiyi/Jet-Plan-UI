// import 'default-passive-events'
import {
    resolveComponent,
    createApp,
    h
} from 'vue'

import ui from 'jet-plan-ui'
import { theme, themeDefault } from 'jet-plan-ui'

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
