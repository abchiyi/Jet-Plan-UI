import { installComponent } from '../tool/lib'

import bubble from './bubble.vue'
export default {
    install (Vue) {
        installComponent(Vue, [
            bubble
        ])
    }
}

export {
    bubble
}
