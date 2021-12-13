import RouterLinkA from './RouterLinkA.vue'
import ButtonItem from './ButtonItem.vue'
import SwitchItem from './SwitchItem.vue'
import DemoPage from './DemoPage.vue'
import DemoBox from './DemoBox.vue'
import Header from './Header.vue'
import Cube from './Cube.vue'

function setCookie(name, value) {
    let Days = 30;
    let exp = new Date();
    exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
    document.cookie =
        name + "=" + escape(value) + ";expires=" + exp.toGMTString();
}

function getCookie(name) {
    var arr,
        reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)"); //正则匹配
    if ((arr = document.cookie.match(reg))) {
        return unescape(arr[2]);
    } else {
        return null;
    }
}
const components = {
    RouterLinkA,
    ButtonItem,
    SwitchItem,
    DemoPage,
    DemoBox,
    Header,
    Cube
}
export {
    setCookie,
    getCookie,
    // 组件
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
