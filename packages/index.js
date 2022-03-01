import gird from './gird'
import form from './form'
import card from './card'
import animations from './animations'
import progress from './progress'
import layout from './layout'
import theme from './theme'
import mask from './mask'
import codeBox from "./code_box";
import shadowBox from './shaodwBox'
import ActionFeedback from './action-feedback'
// 指令&工具函数/类
import directives from './tool/directives'

import themeDefault from './theme_default'

const components = [
    ActionFeedback,
    directives,
    animations,
    shadowBox,
    progress,
    codeBox,
    layout,
    mask,
    gird,
    form,
    card,
]

export {
    ActionFeedback,
    themeDefault,
    animations,
    directives,
    shadowBox,
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
export default function install (Vue) {
    Object.keys(components).forEach(key => {
        Vue.use(components[key])
    })
}
