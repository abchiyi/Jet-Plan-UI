import ReScreenSize from './ReScreenSize.js'
import ScrollTo from './ScrollTo.js'
import Shadow from "./Shadow.js";
import Focus from './Focus.js'

import { installDirective } from '../lib';

export {
    ReScreenSize,
    ScrollTo,
    Shadow,
    Focus,
}

const directives = [
    ReScreenSize,
    ScrollTo,
    Shadow,
    Focus,
]

export default {
    install (Vue) {
        installDirective(Vue, directives)
    }
}
