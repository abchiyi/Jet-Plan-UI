import gird from './gird'
import form from './form'
import card from './card'
import animations from './animations'
import progress from './progress'
import layout from './layout'
import theme from './theme'
import list from './list'
import mask from './mask'

const components = {
    gird,
    form,
    card,
    animations,
    progress,
    layout,
    list,
    mask
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
    gird,
    form,
    card,
    animations,
    progress,
    layout,
    theme,
    list,
    mask
}

export default {
    install,
    theme,
}
