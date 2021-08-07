import gird from './gird'
import form from './form'
import animations from './animations'

const components = {
    gird,
    form,
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
    animations
}

export default {
    install,
    ...components
}
