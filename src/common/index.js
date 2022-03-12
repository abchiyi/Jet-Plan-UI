import RouterLinkA from './RouterLinkA.vue'
import DemoPage from './DemoPage.vue'
import DemoBox from './DemoBox.vue'
import Header from './Header.vue'
import Cube from './Cube.vue'
import InlineCode from './inlineCode.vue'
import DemoDoc from './DemoDoc.vue'
import ExpandMennu from './ExpandMenu.vue'
import DemoPageHaveIndex from './DemoPageHaveIndex.vue'
import DocDirective from './DocDirective.vue'
import DocOfClass from './DocOfClass.vue'
import DocItem from './DocItem.vue'

function setCookie (name, value) {
    let Days = 30;
    let exp = new Date();
    exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
    document.cookie =
        name + "=" + escape(value) + ";expires=" + exp.toGMTString();
}

function getCookie (name) {
    var arr,
        reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)"); //正则匹配
    if ((arr = document.cookie.match(reg))) {
        return unescape(arr[2]);
    } else {
        return null;
    }
}

function redColorModeCookie () {
    /* 从Cookie 加载颜色主题设置,如为'null'则设置为 'true'即'Light Mode' */
    let colorMode = Boolean(getCookie("colorMode"));
    let autoColor = Boolean(getCookie("autoColor"));
    if (colorMode === null) {
        this.setColorModeCookie(true);
        return true;
    }
    return [autoColor, colorMode];
}

function setColorModeCookie (color, auto) {
    setCookie("colorMode", color ? "1" : "");
    setCookie("autoColor", auto ? "1" : "");
}
const components = {
    RouterLinkA,
    InlineCode,
    DemoPage,
    DemoBox,
    DemoDoc,
    Header,
    Cube,
    ExpandMennu,
    DemoPageHaveIndex,
    DocDirective,
    DocOfClass,
    DocItem
}
export {
    redColorModeCookie,
    setColorModeCookie,
    InlineCode,
    setCookie,
    getCookie,
    // 组件
    RouterLinkA,
    DemoPage,
    DemoBox,
    DemoDoc,
    Header,
    Cube,
    ExpandMennu,
    DemoPageHaveIndex,
    DocDirective,
    DocOfClass,
    DocItem
}
export default {
    install (Vue) {
        Object.keys(components).forEach(key => {
            let item = components[key]
            Vue.component(item.name, item)
        })
    },
}
