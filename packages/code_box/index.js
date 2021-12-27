import CodeBox from "./src/CodeBox.vue";

export {
    CodeBox
}

export default {
    install(Vue) {
        Vue.component(CodeBox.name, CodeBox)
    }
}
