import Page from './src/Page.vue'
import Header from './Header.vue'
import Sidebar from './Sidebar.vue'
import Controlbar from "./src/ControlBar.vue";
import FullScreenMask from './src/FullScreenMask.vue'
export {
    Header,
    Sidebar,
    Controlbar,
    FullScreenMask
}

export default {
    install (Vue) {
        Vue.component(Page.name, Page)
        Vue.component(Header.name, Header)
        Vue.component(Sidebar.name, Sidebar)
        Vue.component(Controlbar.name, Controlbar)
        Vue.component(FullScreenMask.name, FullScreenMask)
    }
}
