import CheckBox from './src/CheckBox.vue'
import Button from './src/Button.vue'
import Switch from './src/Switch.vue'
import Input from './src/Input.vue'
import Radio from './src/Radio.vue'
import Slider from './Slider.vue'

export {
    CheckBox,
    Button,
    Switch,
    Radio,
    Input,
    Slider
}

export default {
    install (Vue) {
        Vue.component(CheckBox.name, CheckBox)
        Vue.component(Button.name, Button)
        Vue.component(Switch.name, Switch)
        Vue.component(Radio.name, Radio)
        Vue.component(Input.name, Input)
        Vue.component(Slider.name, Slider)
    }
}
