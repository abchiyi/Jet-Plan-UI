import List from './src/List.vue'
import ListItem from './src/ListItem.vue'


const components = {
    List,
    ListItem
}

export {
    List,
    ListItem
}

export default {
    install(Vue) {
        Object.keys(components).forEach(key => {
            let item = components[key]
            Vue.component(item.name, item)
        })
    }
}
