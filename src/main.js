import {
    createApp
} from 'vue'

import router from './router'
import App from './App.vue'

import common from './common'
import ui from '@'
import {
    theme,
    themeDefault
} from '@'
import './css/main.css'
import {
    redColorModeCookie,
} from './common'


theme.use(themeDefault, ...redColorModeCookie())

createApp(App)
    .use(common)
    .use(router)
    .use(ui)
    .mount('#app')
