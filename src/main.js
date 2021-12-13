import {
    createApp
} from 'vue'

import router from './router'
import App from './App.vue'

import common from './common'

import ui from '@'

ui.theme.use(ui.themeDefault.colors.Light)
const app = createApp(App)
app.use(router)
app.use(ui)
app.use(common)
app.mount('#app')
