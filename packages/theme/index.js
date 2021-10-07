import Background from './Background.vue'

export {
    Background
}

export default {
    install(Vue) {
        Vue.componet(Background.name, Background)
    }
}
