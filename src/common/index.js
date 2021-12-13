import RouterLinkA from './RouterLinkA.vue'
import ButtonItem from './ButtonItem.vue'
import SwitchItem from './SwitchItem.vue'
import DemoPage from './DemoPage.vue'
import DemoBox from './DemoBox.vue'
import Header from './Header.vue'
import Cube from './Cube.vue'

const components = {
    RouterLinkA,
    ButtonItem,
    SwitchItem,
    DemoPage,
    DemoBox,
    Header,
    Cube
}
export default {
    install(Vue) {
        Object.keys(components).forEach(key => {
            let item = components[key]
            Vue.component(item.name, item)
        })
    },
}
