import {
    createApp
} from 'vue'

import router from './router'
import App from './App.vue'

import common from './common'
import ui from '@'

createApp(App)
    .use(common)
    .use(router)
    .use(ui)
    .mount('#app')
