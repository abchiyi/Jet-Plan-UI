import Page from './src/Page.vue'
import Header from './Header.vue'
import Sidebar from './Sidebar.vue'
import ControlBar from "./src/ControlBar.vue"
import FullScreenMask from './src/FullScreenMask.vue'
import Drawer from './src/drawer.vue'

import { installComponent } from '../tool/lib'

export {
    Page,
    Header,
    Sidebar,
    ControlBar,
    FullScreenMask,
    Drawer
}

const components = [
    Page,
    Header,
    Sidebar,
    ControlBar,
    FullScreenMask,
    Drawer
]



export default {
    install (Vue) {
        installComponent(Vue, components)
    }
}
