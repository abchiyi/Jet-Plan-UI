function getThemeStyleEl(elId) {
    let styleEl = document.getElementById(elId)
    if (styleEl) return styleEl
    styleEl = document.createElement("style")
    styleEl.id = elId
    document.head.appendChild(styleEl)
    return styleEl
}

function themToString(colors) {
    let themeStringArray = Object.keys(colors).map((key) => {
        if (Object.hasOwnProperty.call(colors, key)) {
            return `--${key}:${colors[key]}`
        }
    })
    return `:root{${themeStringArray.join(";")}}`
}

function use(theme) {
    function autoDarkMode() {
        const light = {
            ...theme
        }
        const dark = {
            ...theme.auto
        }

        delete light.auto

        return `${themToString(light)}\n@media (prefers-color-scheme: dark) {${themToString(dark)}}`
    }


    EL.innerHTML = theme.auto ?
        autoDarkMode(theme) :
        themToString(theme)
}

// 主题应用元素
const EL = getThemeStyleEl("jet-plan-ui-theme-color")

// 响应式主题系统
const theme = reactive({
    allThemes: {},
    theme: null,

    install(theme) {
        /**
         * 主题是对象时尝试调用 ‘install’ 方法，否则将作为函数处理
         */
        if (theme.install) {
            theme.install(this)
        } else {
            theme(this)
        }
    },
    installTheme(name, object, extend) {
        if (extend) {
            this.allThemes[name] = {
                ...extend,
                ...object,
                name: name
            }
        } else {
            this.allThemes[name] = {
                name: name,
                ...object
            }
        }
    },
    toAuto(lightTheme, darkTheme) {
        const auto = {
            ...lightTheme
        }
        auto.auto = darkTheme
        // auto.name = auto.name.split('_')[0] + '_auto';
        return auto
    },
    setTheme(name) {
        if (this.allThemes[name]) {
            this.theme = this.allThemes[name]
            use(this.theme)
        } else {
            console.warn(`$jetTheme.setTheme
    Not found theme :${name}`)
        }
    }
})

import {
    installComponent
} from '../tool/lib'

import AllTheme from './AllTheme.vue'
import {
    reactive
} from "vue"

export default {
    install(Vue) {
        installComponent(Vue, [
            AllTheme
        ])
        // 全局挂载主题控制器
        Vue.config.globalProperties.$jetTheme = reactive(theme)
    },
    $jetTheme: theme
}
