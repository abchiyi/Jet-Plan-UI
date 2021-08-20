import Size from './src/Size.js'
import Page from './src/Page.vue'
import Header from './Header.vue'
import Sidebar from './Sidebar.vue'
import Background from './src/Background.vue'
import ClickFeedback from './src/ClickFeedback.vue'
export {
    Size,
    Header,
    Sidebar,
    Background,
    ClickFeedback,
}

export default {
    Size,
    install(Vue) {
        Vue.component(Page.name, Page)
        Vue.component(Header.name, Header)
        Vue.component(Sidebar.name, Sidebar)
        Vue.component(Background.name, Background)
        Vue.component(ClickFeedback.name, ClickFeedback)
    }
}
