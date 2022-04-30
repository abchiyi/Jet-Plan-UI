import Table from './Table.vue'

import {
    installComponent
} from '../tool/lib'


export default {
    install(Vue) {
        installComponent(Vue, [
            Table
        ])
    }
}
