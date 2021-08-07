import Cube from './Cube.vue'

export {
    Cube
}
export default {
    install(Vue) {
        Vue.component(Cube.name, Cube)
    }
}
