import List from './src/List.vue'


const components = {
    List
}

export {
    List
}

export default {
    install(Vue) {
        Object.keys(components).forEach(key => {
            let item = components[key]
            Vue.component(item.name, item)
        })
    }
}
