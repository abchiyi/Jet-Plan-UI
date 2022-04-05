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
import common from "./common"

import {
    redColorModeCookie,
    setColorModeCookie
} from "./common"


const BASE_COMPONENT = {
    name: "base-page",
    mixins: [ui.themeMixin],
    created() {
        this.$jetTheme.install(themeDefault)
        this.$jetTheme.installTheme(
            "bright_pink", {
                primary: '#e47878',
                background: "#e3ecff",
            },
            this.$jetTheme.allThemes.jetPlan_light
        )
        this.$jetTheme.installTheme(
            "night_blue", {
                text: "#a0a59b",
                primary: '#3c35ff',
                background: '#24282f',
                foreground: '#141920'
            },
            this.$jetTheme.allThemes.jetPlan_dark
        )


        let keys = Object.keys(
            this.$jetTheme.allThemes
        )
        this.$jetTheme.theme = this.$jetTheme.allThemes[keys[2]]

        // 读取主题配置
        let themeCookie = redColorModeCookie()
        this.$jetTheme.darkMode = themeCookie.darkMode
        this.$jetTheme.autoDarkMode = themeCookie.darkModeAuto

        // 监听并设置 cookies
        this.$watch(
            () => this.$jetTheme.darkMode,
            () => {
                setColorModeCookie(
                    this.$jetTheme.darkMode,
                    this.$jetTheme.autoDarkMode
                )
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
