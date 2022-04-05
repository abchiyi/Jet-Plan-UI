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
        this.$jetTheme.importTheme(themeDefault)
        this.$jetTheme.importTheme({
            test_light: {
                name: 'test-light',
                primary: '#e47878',
                background: "#a3b3d4",
            },
            test_dark: {
                name: 'test-dark',
                text: "#a0a59b",
                primary: '#3c35ff',
                background: '#24282f',
                foreground: '#adadad'
            }
        })

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
