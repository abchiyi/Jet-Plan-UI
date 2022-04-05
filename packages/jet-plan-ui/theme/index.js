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

    installTheme(theme) {
        /**
         * 主题是对象时尝试调用 ‘install’ 方法，否则将作为函数处理
         */
        if (theme.install) {
            theme.install(this)
        } else {
            theme(this)
        }
    },
    install(name, object) {
        this.allThemes[name] = object
    },
    toAuto(lightTheme, darkTheme) {
        const auto = {
            ...lightTheme
        }
        auto.auto = darkTheme
        auto.name = auto.name.split('_')[0] + '_auto';
        return auto
    }
})

let _Vue;

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
        _Vue = Vue
    },
    mixin: {
        created() {
            // 全局挂载主题控制器
            _Vue.config.globalProperties.$jetTheme = reactive(theme)

            // -- 监听主题设置变更 --
            this.$watch(() => theme.theme, (theme) => {
                use(theme)
                console.log();
            })
        }
    }
}
