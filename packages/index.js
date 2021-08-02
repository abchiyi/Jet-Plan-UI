import gird from './gird'

const components = {
    gird,
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
    gird
}

export default {
    install,
    ...components
}
