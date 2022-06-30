import baseShape from './baseShape.vue'

export {
    baseShape
}

import {
    installComponent
} from '../tool/lib'

export default {
    install (Vue) {
        installComponent(Vue, [
            baseShape
        ])
    }
}
// TODO 删除组件
