import gird from './gird'
import form from './form'
import card from './card'
import animations from './animations'
import progress from './progress'
import layout from './layout'
import theme from './theme'

const components = {
    gird,
    form,
    card,
    animations,
    progress,
    layout,
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
    theme
}

export default {
    install,
    theme,
    ...components
}
