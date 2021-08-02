import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import ui from '../packages'


const app = createApp(App)
app.use(router)
app.use(ui)
app.mount('#app')
