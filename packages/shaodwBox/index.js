import ShadowBox from "./src/ShaodowBox.vue";

export {
    ShadowBox
}

export default {
    install(Vue) {
        Vue.component(ShadowBox.name, ShadowBox)
    }
}
