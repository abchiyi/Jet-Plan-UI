import gird from "./gird"
import form from "./form"
import card from "./card"
import animations from "./animations"
import progress from "./progress"
import layout from "./layout"
import mask from "./mask"
import codeBox from "./code_box"
import ActionFeedback from "./action-feedback"
import theme from './theme'
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
    theme
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
