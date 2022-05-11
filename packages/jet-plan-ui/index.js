import gird from "./gird"
import form from "./form"
import card from "./card"
import animations from "./animations"
import progress from "./progress"
import layout from "./layout"
import mask from "./mask"
import codeBox from "./code_box"
import ActionFeedback from "./action-feedback"
import avater from './avater'
import theme from './theme'
import table from './table'
import alert from './alert'
// 指令&工具函数/类
import directives from "./tool/directives"

const components = [
    ActionFeedback,
    directives,
    animations,
    progress,
    codeBox,
    layout,
    mask,
    gird,
    form,
    card,
    theme,
    avater,
    table,
    alert
]

export {
    ActionFeedback,
    animations,
    directives,
    progress,
    codeBox,
    layout,
    theme,
    mask,
    gird,
    form,
    card,
    avater,
    table,
    alert
}

// 默认安装程序
export default {
    install(Vue) {
        Object.keys(components).forEach((key) => {
            Vue.use(components[key])
        })
    },
    $jetTheme: theme.$jetTheme
}
