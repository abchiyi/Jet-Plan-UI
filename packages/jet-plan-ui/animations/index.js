import TransitionFolded from './src/TransitionFolded.vue'
import TransitionSlide from './src/TransitionSlide.vue'
import TransitionFade from './src/TransitionFade.vue'
import TransitionScale from './src/TransitionScale'
export {
    TransitionFolded,
    TransitionSlide,
    TransitionFade,
    TransitionScale,
}

export default {
    install (Vue) {
        Vue.component(TransitionFolded.name, TransitionFolded)
        Vue.component(TransitionSlide.name, TransitionSlide)
        Vue.component(TransitionFade.name, TransitionFade)
        Vue.component(TransitionScale.name, TransitionScale)
    }
}
