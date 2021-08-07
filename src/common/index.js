import ButtonItem from './ButtonItem.vue'
import SwitchItem from './SwitchItem.vue'
import DemoPage from './DemoPage.vue'
import DemoBox from './DemoBox.vue'
import Cube from './Cube.vue'

export {
    ButtonItem,
    SwitchItem,
    DemoPage,
    DemoBox,
    Cube
}
export default {
    install(Vue) {
        Vue.component(ButtonItem.name, ButtonItem)
        Vue.component(SwitchItem.name, SwitchItem)
        Vue.component(DemoPage.name, DemoPage)
        Vue.component(DemoBox.name, DemoBox)
        Vue.component(Cube.name, Cube)
    }
}
