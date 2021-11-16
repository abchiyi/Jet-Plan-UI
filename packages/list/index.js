import Li from './src/Li.vue'
import Ol from './src/Ol.vue'
import Ul from './src/Ul.vue'


const components = {
    Li,
    Ol,
    Ul
}

export {
    Li,
    Ol,
    Ul
}

export default {
    install(Vue) {
        Object.keys(components).forEach(key => {
            let item = components[key]
            Vue.component(item.name, item)
        })
    }
}
