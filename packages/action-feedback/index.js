import ActionFeedback from './ActionFeedback.vue'
import ClickFeedback from './ClickFeedback.vue'

import {
    installComponent,
} from '../tool'

export {
    ActionFeedback,
    ClickFeedback
}

const components = [ActionFeedback, ClickFeedback]

export default {
    install(Vue) {
        installComponent(Vue, components)
    }
}
