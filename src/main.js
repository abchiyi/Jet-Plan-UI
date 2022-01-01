import {
    createApp
} from 'vue'

import router from './router'
import App from './App.vue'

import common from './common'
import ui from '@'
import {
    tool
} from '@'

createApp(App)
    .use(common)
    .use(router)
    .use(ui)
    .use(tool)
    .mount('#app')
