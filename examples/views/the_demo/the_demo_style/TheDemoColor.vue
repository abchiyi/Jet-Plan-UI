<template>
    <div>
        <h1>主题 option 说明</h1>
        <p>主题中所有定义的 option 功能明细</p>
        <hr />
        <h2>JetPlanLight</h2>
        <j-row warp>
            <j-cube
                :style="{
                    backgroundColor: light[key],
                }"
                v-for="key in Object.keys(light)"
                v-auto-color
                class="cube"
                :key="key"
            >
                {{ key }}
            </j-cube>
        </j-row>
        <h2>JetPlanDark</h2>
        <j-row warp>
            <j-cube
                :style="{
                    backgroundColor: dark[key],
                }"
                v-for="key in Object.keys(dark)"
                v-auto-color
                class="cube"
                :key="key"
            >
                {{ key }}
            </j-cube>
        </j-row>

        <h2>Options</h2>
        <j-code-box
            can-copy
            lang="javascript"
            :code="`

 export default {
    // BACKGROUND
    foreground: '', // 前景色，多用于需要强调的块
    background: '', // 背景色，默认应用与 body 元素
    disabled: '', // 块被禁用时
    border: '', // 边框色，通常比以上 3个色深

    // TEXT
    'text-disabled': '', // 文本禁用时。要求为30%透明色
    'text-hint': '', // 辅助文本色，不透明，比常规文本色浅
    text: '', // 常规文本色，已应用于body并设置为全局继承

    // INFO 信息色
    secondary: '' // 通常用于次级按钮
    primary: '', // 主题色
    success: '',
    warning: '',
    error: '',
    info: '',

    // OTHERS
    frosted_glass: '', // 毛玻璃效果色
    card: '', // 卡片组件背景色
    shadow: '', // 阴影色
    mask: '', // 遮罩色，通常为透明

    // 以下文本色彩仅被指令 v-auto-color 调用
    // 详情参考 https://jetplanui.github.io/#/directives 指令 v-auto-color
    'text-light': '',
    'text-dark': '',
}
        `"
        />
    </div>
</template>

<script>
import { jetPlanLight, jetPlanDark } from '@theme';
export default {
    name: 'the-demo-color',
    data() {
        return {
            light: jetPlanLight,
            dark: jetPlanDark,
        };
    },
};
</script>

<style>
.cube {
    box-sizing: border-box var(--border);
    border: 3px solid var(--border);
    border-radius: var(--m-radius);
    font-weight: 400;
    font-size: 12px;
    padding: 2px;
    height: 60px;
    width: 80px;
    margin: 5px;
}
</style>
