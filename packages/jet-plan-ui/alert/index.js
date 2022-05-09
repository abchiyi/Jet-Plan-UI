import alert from './alert.vue'

import {
    installComponent
} from '../tool/lib'

export {
    alert
}

export default {
    install() {
        return installComponent([
            alert
        ])
    }
}
