import ActionFeedback from './ActionFeedback.vue'

import {
    installComponent
} from '../tool'

export {
    ActionFeedback
}

const components = []
export default {
    install(Vue) {
        installComponent(Vue, components)
    }
}
