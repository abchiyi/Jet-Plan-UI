import Button from './src/Button.vue'
import Switch from './src/Switch.vue'
import Input from './src/Input.vue'

export {
    Button,
    Switch,
    Input
}

export default {
    install(Vue) {
        Vue.component(Button.name, Button)
        Vue.component(Switch.name, Switch)
        Vue.component(Input.name, Input)
    }
}
