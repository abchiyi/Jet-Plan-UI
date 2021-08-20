import Progress from './src/Progress.vue'

export {
    Progress
}

export default {
    install(Vue) {
        Vue.component(Progress.name, Progress)
    }
}
