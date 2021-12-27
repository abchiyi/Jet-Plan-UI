import gird from './gird'
import form from './form'
import card from './card'
import animations from './animations'
import progress from './progress'
import layout from './layout'
import theme from './theme'
import list from './list'
import mask from './mask'
import codeBox from "./code_box";

import themeDefault from './theme_default'

const components = {
    animations,
    progress,
    codeBox,
    layout,
    list,
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
    themeDefault,
    theme,
    animations,
    progress,
    codeBox,
    layout,
    list,
    mask,
    gird,
    form,
    card,
}

export default {
    themeDefault,
    install,
    theme,
}
