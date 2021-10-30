import {
    createApp
} from 'vue'
import router from './router'
import App from './App.vue'
import ui from '../packages'
import '../packages/theme_default'
import {
    theme
} from '../packages'
import common from './common'

theme.use('default')

const app = createApp(App)
app.use(router)
app.use(ui)
app.use(common)
app.mount('#app')
