import gird from "./gird";
import form from "./form";
import card from "./card";
import animations from "./animations";
import progress from "./progress";
import layout from "./layout";
import _theme from "./theme";
import mask from "./mask";
import codeBox from "./code_box";
import ActionFeedback from "./action-feedback";
// 指令&工具函数/类
import directives from "./tool/directives";

import { reactive } from "vue";
let theme = reactive(_theme);

const components = [
    ActionFeedback,
    directives,
    animations,
    progress,
    codeBox,
    layout,
    mask,
    gird,
    form,
    card,
];

export {
    ActionFeedback,
    animations,
    directives,
    progress,
    codeBox,
    layout,
    theme,
    mask,
    gird,
    form,
    card,
};

// 默认安装程序
export default function install (Vue) {
    Object.keys(components).forEach((key) => {
        Vue.use(components[key]);
    });
    // 全局挂载主题控制器
    Vue.config.globalProperties.$jetTheme = theme;
}
