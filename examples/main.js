import {
    resolveComponent,
    createApp,
    h,
} from "vue"

// 自定义 fonts, css, style
import "./assets"

// JetUI
import ui from "@ui"
import themeDefault, {
    jetPlanLight,
    jetPlanDark
}
from "@theme"

// 导入通知控制器
import {
    AlertData
} from '@ui/alert'

// Custom components
import router from "./router"
import common, {
    getCookie,
    setCookie
} from "./common"

// 安装主题
ui.$jetTheme.install(themeDefault)

// 从现有主题拓展并安装
ui.$jetTheme.installTheme(
    "bright_pink", {
        primary: '#e47878',
        background: "#e3ecff",
    },
    jetPlanLight
)
ui.$jetTheme.installTheme(
    "night_blue", {
        text: "#a0a59b",
        primary: '#3c35ff',
        background: '#24282f',
        foreground: '#141920'
    },
    jetPlanDark
)

// 从‘Cookie’读取主题配置
ui.$jetTheme.setTheme(
    getCookie('theme_of_last')
)

const BASE_COMPONENT = {
    name: "base-page",
    created() {
        // 在 cookies 中记录最后应用的主题
        this.$watch(
            () => this.$jetTheme.theme,
            (theme) => {
                setCookie('theme_of_last', theme.name)
            }
        )
    },
    render: () => h(resolveComponent("router-view")),
}

// Go
createApp(BASE_COMPONENT)
    .use(common)
    .use(router)
    .use(ui)
    .use((Vue) => {
        Vue.config.globalProperties.$jetAlert = new AlertData()
    })
    .mount("#app")
