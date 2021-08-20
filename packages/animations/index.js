import SlideTransition from "./src/SlideTransition.vue"
import FoldedTransition from './src/FoldedTransition'
import FadeTransition from './src/FadeTransition.vue'
import ClickFeedback from "./src/ClickFeedback.vue"
export {
    FoldedTransition,
    SlideTransition,
    FadeTransition,
    ClickFeedback
}

export default {
    install(Vue) {
        Vue.component(FoldedTransition.name, FoldedTransition)
        Vue.component(SlideTransition.name, SlideTransition)
        Vue.component(FadeTransition.name, FadeTransition)
        Vue.component(ClickFeedback.name, ClickFeedback)
    }
}
