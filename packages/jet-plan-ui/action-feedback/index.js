import ActionFeedback from './ActionFeedback.vue'

import {
    installComponent,
} from '../tool/lib'

export {
    ActionFeedback,
}

const components = [ActionFeedback]

export default {
    install (Vue) {
        installComponent(Vue, components)
    }
}
