import gird from './gird'
import animations from './animations'

const components = {
    gird,
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
    animations
}

export default {
    install,
    ...components
}
