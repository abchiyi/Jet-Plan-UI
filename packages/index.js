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
import tool from './tool'

import themeDefault from './theme_default'

const components = {
    ActionFeedback,
    animations,
    shadowBox,
    progress,
    codeBox,
    layout,
    mask,
    gird,
    form,
    card,
}

function install(Vue) {
    Object.keys(components).forEach(key => {
        Vue.use(components[key])
    })
}

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}

export {
    ActionFeedback,
    themeDefault,
    theme,
    animations,
    shadowBox,
    progress,
    codeBox,
    layout,
    mask,
    gird,
    form,
    card,
    tool
}

export default {
    themeDefault,
    install,
    theme,
}
