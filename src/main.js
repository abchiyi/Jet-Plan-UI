// import 'default-passive-events'
import {
    resolveComponent,
    createApp,
    h
} from 'vue'

// UI
import ui from '@'
import {
    theme,
    themeDefault
} from '@'

// Custom compents
import router from './router'
import common from './common'
import {
    redColorModeCookie,
} from './common'

// Set theme
// XXX 应设置默认颜色选项
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
