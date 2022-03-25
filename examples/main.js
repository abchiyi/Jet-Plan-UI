// 自定义 fonts, css, style
import "./assets";

import { resolveComponent, createApp, h } from "vue";

import ui from "@ui";
// import { theme } from "@ui";
import themeDefault from "@theme";

// Custom compents
import router from "./router";
import common from "./common";

import { redColorModeCookie, setColorModeCookie } from "./common";

// Set theme
// theme.use(themeDefault, ...redColorModeCookie());
// theme.use(themeDefault);

const BASE_COMPONENT = {
    name: "mousseUI-home-page",
    created () {
        let themeSetting = redColorModeCookie()
        this.$jetTheme.watchTheneChange(this);
        this.$jetTheme.themeList = [themeDefault]
        this.$jetTheme.DarkMode = themeSetting[1]
        this.$jetTheme.autoDarkMode = themeSetting[0]

        // 监听并设置 cookes
        function setCookie () {
            setColorModeCookie(
                this.$jetTheme.DarkMode,
                this.$jetTheme.autoDarkMode
            )
        }
        this.$watch(
            () => this.$jetTheme.DarkMode,
            () => {
                setCookie()
            }
        )
        this.$watch(
            () => this.$jetTheme.autoDarkMode,
            () => {
                setCookie()
            }
        )

    },
    render: () => h(resolveComponent("router-view")),
};

// Go
createApp(BASE_COMPONENT).use(common).use(router).use(ui).mount("#app");
