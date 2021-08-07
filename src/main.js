import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import ui from '../packages'
import public from './public'


const app = createApp(App)
app.use(router)
app.use(ui)
app.use(public)
app.mount('#app')
