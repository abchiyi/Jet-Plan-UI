import {
    createApp
} from 'vue'

import router from './router'
import App from './App.vue'

import common from './common'
import ui from '@'

ui.theme.use(ui.themeDefault.colors.Light)

createApp(App)
    .use(common)
    .use(router)
    .use(ui)
    .mount('#app')
