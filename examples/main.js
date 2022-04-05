import {
    resolveComponent,
    createApp,
    h
} from "vue"

// 自定义 fonts, css, style
import "./assets"

// JetUI
import ui from "@ui"
import themeDefault from "@theme"

// Custom components
import router from "./router"
import common, {
    getCookie,
    setCookie
} from "./common"

ui.$jetTheme.install(themeDefault)
ui.$jetTheme.installTheme(
    "bright_pink", {
        primary: '#e47878',
        background: "#e3ecff",
    },
    ui.$jetTheme.allThemes.jetPlan_light
)
ui.$jetTheme.installTheme(
    "night_blue", {
        text: "#a0a59b",
        primary: '#3c35ff',
        background: '#24282f',
        foreground: '#141920'
    },
    ui.$jetTheme.allThemes.jetPlan_dark
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
    .mount("#app")
