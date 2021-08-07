import Button from './src/Button.vue'
import Switch from './src/Switch.vue'
import './src/css/shape.css'

export {
    Button,
    Switch,
}

export default {
    install(Vue) {
        Vue.component(Button.name, Button)
        Vue.component(Switch.name, Switch)
    }
}
