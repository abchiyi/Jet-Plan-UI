import TransitionFolded from './src/TransitionFolded.vue'
import TransitionSlide from './src/TransitionSlide.vue'
import TransitionFade from './src/TransitionFade.vue'
import ClickFeedback from './src/ClickFeedback.vue'
export {
    TransitionFolded,
    TransitionSlide,
    TransitionFade,
    ClickFeedback
}

export default {
    install(Vue) {
        Vue.component(TransitionFolded.name, TransitionFolded)
        Vue.component(TransitionSlide.name, TransitionSlide)
        Vue.component(TransitionFade.name, TransitionFade)
        Vue.component(ClickFeedback.name, ClickFeedback)
    }
}
