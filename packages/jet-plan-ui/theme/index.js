// TODO 修正主题系统文档

// 导入基本样式
import './src/css'

import {
    installComponent, changeCaseKebab
} from '../tool/lib'

// 导入色彩配置文件
import Colors from './colors'

import AllTheme from './AllTheme.vue'
import {
    reactive
} from "vue"

function getThemeStyleEl (elId) {
    let styleEl = document.getElementById(elId)
    if (styleEl) return styleEl
    styleEl = document.createElement("style")
    styleEl.id = elId
    document.head.appendChild(styleEl)
    return styleEl
}

function themeToCssCode (theme) {

    // TODO 在文档中告知仅可使用 HEX(16进制) 格式色彩编码
    function isHEX (string) {
        if (string.search(/^#.+/) !== -1) {
            return true
        }
        return false
    }

    function toCssProperty (key, value) {
        // 转换为 css 键值对
        return `--${changeCaseKebab(key)}:${value}`
    }

    function toCssValueArray (colors, type) {
        if (colors) {
            return Object.keys(colors).map(
                key => {
                    if (isHEX(colors[key])) {
                        return `--${type}-${key}:${colors[key]}`
                    }
                    return `--${type}-${key}:${searchColor(colors[key])}`
                }
            )
        }
        return []
    }
    function toCssValue (key) {
        const color = theme[key]
        if (isHEX(color)) {
            return toCssProperty(key, color)
        }
        return toCssProperty(key, searchColor(color))
    }

    let cssString = []

    Object.keys(theme).forEach(
        (key) => {
            switch (true) {
                case key == 'name':
                    cssString.push(`--${key}:${theme[key]}`)
                    break
                case typeof theme[key] == 'string':
                    // 主题配置关键字为非对象时直接写入到列表
                    cssString.push(
                        toCssValue(key)
                    )
                    break
                default:
                    //主题配置为对象时
                    cssString = cssString.concat(
                        toCssValueArray(theme[key], key)
                    )
                    break
            }
            toCssValueArray
        }
    )

    return `:root{${cssString.join(";")}}`
}

function use (theme) {
    function autoDarkMode () {
        const light = {
            ...theme
        }
        const dark = {
            ...theme.auto
        }

        delete light.auto

        return `${themeToCssCode(light)}\n@media (prefers-color-scheme: dark) {${themeToCssCode(dark)}}`
    }

    EL.innerHTML = theme.auto ?
        autoDarkMode(theme) :
        themeToCssCode(theme)
}

export function searchColor (colorName) {
    // 拆分色彩名&色彩序号
    const indexRe = /A?\d+/
    const color = colorName.split(indexRe)
    const index = colorName.match(indexRe)

    if (!colorName) return
    if (color && index) {
        return Colors[color[0]][index[0]]
    } else if (color) {
        if (typeof Colors[colorName] == 'string') {
            return Colors[colorName]
        }
        return Colors[color[0]][500]
    }
}


// 主题应用元素
const EL = getThemeStyleEl("jet-plan-ui-theme-color")

// 响应式主题系统
const Theme = reactive({
    allThemes: {},
    theme: null,

    install (theme) {
        /**
         * 主题是对象时尝试调用 ‘install’ 方法，否则将作为函数处理
         */
        if (theme.install) {
            theme.install(this)
        } else {
            theme(this)
        }
    },
    installTheme (name, object, extend) {
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
    toAuto (lightTheme, darkTheme) {
        const auto = {
            ...lightTheme
        }
        auto.auto = darkTheme
        // auto.name = auto.name.split('_')[0] + '_auto';
        return auto
    },
    setTheme (name) {
        if (this.allThemes[name]) {
            this.theme = this.allThemes[name]

            use(this.theme)
        } else {
            console.warn(`$jetTheme.setTheme
    Not found theme :${name}`)

            let allThemeName = Object.keys(this.allThemes).toString()
            console.log(allThemeName)
            allThemeName.replace(/,/, '\n')

            console.log(
                `AllThemes:\n${allThemeName}`
            )
        }
    }
})



export default {
    install (Vue) {
        installComponent(Vue, [
            AllTheme
        ])

    },
    $jetTheme: Theme
}
export {
    AllTheme,
    Colors,
    Theme,
}
