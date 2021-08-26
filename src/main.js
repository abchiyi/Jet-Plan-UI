import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import ui from '../packages'
import '../packages/theme_default'
import common from './common'


const app = createApp(App)
app.use(router)
app.use(ui)
app.use(common)
app.mount('#app')
