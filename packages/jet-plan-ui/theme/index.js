function getThemeStyleEl(elId) {
    let styleEl = document.getElementById(elId)
    if (styleEl) return styleEl
    styleEl = document.createElement("style")
    styleEl.id = elId
    document.head.appendChild(styleEl)
    return styleEl
}

function setTheme(el, colotString) {
    if (el.innerHTML != colotString) {
        el.innerHTML = colotString
    }
}

function use(themes, auto, darkMode) {
    darkMode
    const EL = getThemeStyleEl("jet-plan-ui-theme-color")

    function themToString(colors) {
        let themeStringArry = Object.keys(colors).map((key) => {
            if (Object.hasOwnProperty.call(colors, key)) {
                return `--${key}:${colors[key]}`
            }
        })
        return `:root{${themeStringArry.join(";")}}`
    }

    function autoDarkMode(lightTheme, darkTheme) {
        const light = themToString(lightTheme)
        const dark = themToString(darkTheme)
        return `${light}\n@media (prefers-color-scheme: dark) {${dark}}`
    }

    function themeSwitch(theme) {
        if (!auto) {
            // 常规切换主题
            // let colors = darkMode ? theme.dark : theme.light
            return themToString(theme)
        } else {
            // 自动黑暗主题
            if (theme.dark) {
                return autoDarkMode(
                    theme.light,
                    theme.dark
                )
            }
        }
    }




    //兼容序列与单个对象
    themes.length != undefined ?
        setTheme(
            EL,
            themes
            .map((theme) => {
                return themeSwitch(theme)
            })
            .join("\n")
        ) :
        setTheme(EL, themeSwitch(themes))
}


// 响应式主题系统
const theme = reactive({
    __watchIsSet: false,
    use: use,
    list: new Array(),
    usedThemes: new Array(),
    darkMode: false,
    autoDarkMode: false,
    importTheme(theme) {
        for (let key in theme) {
            this.list.push(
                theme[key]
            )
        }
    }
})

let _Vue = undefined

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
            this.$watch(() => theme.darkMode, (v) => {
                use(theme.usedThemes, theme.autoDarkMode, v)
            })
            this.$watch(() => theme.autoDarkMode, (v) => {
                use(theme.usedThemes, v, theme.darkMode)
            })
            this.$watch(() => theme.usedThemes, (v) => {
                use(v, theme.autoDarkMode, theme.darkMode)
            }, {
                deep: true
            })

            // 应用默认主题
            /* 等待根组件调用导入主题方法后，在下一帧中应用主题 */
            this.$nextTick(() => {
                if (this.$jetTheme.list.length > 0) {
                    this.$jetTheme.usedThemes.push(
                        this.$jetTheme.list[0]
                    )
                }
            })

        }
    }
}
