import {
    createApp
} from 'vue'

import router from './router'
import App from './App.vue'

import common from './common'

import ui from '../packages'
import theme from '../packages/theme_default'

ui.theme.use(theme.colors.Dark)
// ui.theme.use(theme.colors.Light)

const app = createApp(App)
app.use(router)
app.use(ui)
app.use(common)
app.mount('#app')
