import gird from './gird'
import animationTransitions from './animation'

const components = {
    gird,
    animationTransitions
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
    animationTransitions
}

export default {
    install,
    ...components
}
