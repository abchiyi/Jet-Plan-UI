import ReScreenSize from './directives/ReScreenSize.js'
import Shadow from "./directives/Shadow.js";
import Focus from './directives/Focus.js'

export {
    ReScreenSize,
    Shadow,
    Focus,
}

export default {
    install(Vue) {
        Vue.directive(ReScreenSize.name, ReScreenSize)
        Vue.directive(Shadow.name, Shadow)
        Vue.directive(Focus.name, Focus)
    }
}
