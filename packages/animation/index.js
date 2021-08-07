import FoldedTransition from './FoldedTransition'
import FadeTransition from './FadeTransition.vue'
import SlideOut from "./src/SlideOut.vue"

export {
    FoldedTransition,
    SlideOut
}

export default {
    install(Vue) {
        Vue.component(FoldedTransition.name, FoldedTransition)
        Vue.component(FadeTransition.name, FadeTransition)
        Vue.component(SlideOut.name, SlideOut)
    }
}
