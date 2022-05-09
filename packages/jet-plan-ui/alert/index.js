import alert from './alert.vue'

import {
    installComponent
} from '../tool/lib'

// const alerts = []

export {
    alert
}

export default {
    install(Vue) {
        installComponent(Vue, [
            alert
        ])
        // 全局挂载 alert 对象
        // Vue.config.globalProperties.$jetAlert = {
        //     alerts: alerts,
        //     alert(alertObj) {
        //         alerts.push(alertObj)
        //     }
        // }
    }
}
