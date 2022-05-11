import alert from './alert.vue'

import {
    installComponent
} from '../tool/lib'
import {
    reactive
} from 'vue'

// const alerts = []


export class AlertData {

    constructor() {
        this.alerts = reactive([])
    }

    info(text, timeout) {
        this.alerts.push({
            type: 'info',
            content: text,
            timeout: timeout
        })
    }
    error(text, timeout) {
        this.alerts.push({
            type: 'error',
            content: text,
            timeout: timeout
        })
    }
    warning(text, timeout) {
        this.alerts.push({
            type: 'warning',
            content: text,
            timeout: timeout
        })
    }
    success(text, timeout) {
        this.alerts.push({
            type: 'success',
            content: text,
            timeout: timeout
        })
    }

    remove(eventRemoveData) {
        const index = this.alerts.indexOf(eventRemoveData);
        if (index !== -1) {
            this.alerts.splice(index, 1);
        }
    }
    removeAll() {
        let ms = 240;
        this.alerts.forEach((item) => {
            setTimeout(() => {
                this.remove(item);
            }, (ms += 240));
        });
    }

}

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
