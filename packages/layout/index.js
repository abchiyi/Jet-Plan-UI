import Size from './src/Size.js'
import Page from './src/Page.vue'
import Header from './Header.vue'
import Sidebar from './Sidebar.vue'
import Controlbar from "./src/ControlBar.vue";
export {
    Size,
    Header,
    Sidebar,
    Controlbar
}

export default {
    Size,
    install(Vue) {
        Vue.component(Page.name, Page)
        Vue.component(Header.name, Header)
        Vue.component(Sidebar.name, Sidebar)
        Vue.component(Controlbar.name, Controlbar)
    }
}
