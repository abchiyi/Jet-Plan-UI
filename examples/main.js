// 自定义 fonts, css, style
import "./assets"

import { resolveComponent, createApp, h } from "vue"

import ui from "@ui"
// import { theme } from "@ui";
import themeDefault from "@theme"

// Custom compents
import router from "./router"
import common from "./common"

import { redColorModeCookie, setColorModeCookie } from "./common"

// Set theme
// theme.use(themeDefault, ...redColorModeCookie());
// theme.use(themeDefault);

const BASE_COMPONENT = {
    name: "mousseUI-home-page",
    created () {
        let themeCookie = redColorModeCookie()
        this.$jetTheme.watchTheneChange(this)
        this.$jetTheme.themeList = [themeDefault]
        this.$jetTheme.darkMode = themeCookie.darkMode
        this.$jetTheme.autoDarkMode = themeCookie.darkModeAuto

        // 监听并设置 cookes
        this.$watch(
            () => this.$jetTheme.darkMode,
            () => {
                setColorModeCookie(
                    this.$jetTheme.darkMode,
                    this.$jetTheme.autoDarkMode
                )
            }
        )
        this.$watch(
            () => this.$jetTheme.autoDarkMode,
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
