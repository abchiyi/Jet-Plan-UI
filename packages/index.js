import gird from './gird'
import form from './form'
import card from './card'
import animations from './animations'

const components = {
    gird,
    form,
    card,
    animations
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
    animations
}

export default {
    install,
    ...components
}
