<template>
    <div>
        <h1>按钮</h1>
        <p>按钮组件</p>
        <hr />
        <doc-item name="Props:" tag-is="h2">
            <li id="prop-button-text">
                <p>
                    <high-lighter>text</high-lighter>: type - Boolean, default -
                    false
                </p>
                <p>按钮外观切换，使用常规按钮还是文本按钮</p>
            </li>
            <li id="prop-button-primary">
                <p>
                    <high-lighter>primary</high-lighter>: type - Boolean,
                    default - false
                </p>
                <p>按钮外观切换，按钮外观展示为带主题色的主要按钮</p>
            </li>
            <li id="prop-button-row">
                <p>
                    <high-lighter>row</high-lighter>: type - Boolean, default -
                    false
                </p>
                <p>使按钮占据一行</p>
            </li>
            <li id="prop-button-disabled">
                <p>
                    <high-lighter>disabled</high-lighter>: type - Boolean,
                    default - false
                </p>
                <p>禁用按钮</p>
            </li>
            <li id="prop-others">
                <p>
                    按钮组件外层使用
                    <high-lighter>j-action-feedback</high-lighter>
                    组件渲染，其余
                    <high-lighter>Prop</high-lighter>
                    参考
                    <j-button
                        @click="$router.push('/action-feedback')"
                        tag="a"
                        text
                        >j-action-feedback</j-button
                    >
                    组件。
                </p>
                <p>
                    <high-lighter>j-button</high-lighter>
                    非文本按钮状态下接入了自动文本色计算函数，能够在一定情况下控制增强按钮背景与文本的对比度。详细参考
                    <j-button @click="$router.push('/directives')" tag="a" text
                        >directives</j-button
                    >
                    中的
                    <high-lighter>v-auto-color</high-lighter> 指令。
                </p>
            </li>
        </doc-item>
        <!-- Demo -->
        <h2>示例：</h2>
        <demo-box title="<j-button>" :code="code" id="fade">
            <h3>按钮</h3>
            <j-row warp id="buttons-button">
                <j-button primary>Primary</j-button>
                <j-button primary disabled>Primary</j-button>
                <j-button>Button</j-button>
                <j-button disabled>Button disabled</j-button>
            </j-row>
            <h3>文本按钮</h3>
            <j-row warp id="buttons-button-text">
                <j-button primary text>Text Button Primary</j-button>
                <j-button primary text disabled>Text Button Primary</j-button>
                <j-button text>Text Button</j-button>
                <j-button text disabled>Text Button Disabled</j-button>
            </j-row>
            <h3>单行按钮</h3>
            <div id="buttons-row">
                <j-button row>Button One Row</j-button>
                <j-button text row>Text Button One Row</j-button>
            </div>
        </demo-box>
    </div>
</template>

<script>
import pdn from '../../common/mix/popDemoName';
// import a from '../../router';
export default {
    mixins: [pdn],
    name: 'the-demo-buttons',
    data() {
        return {
            code: `<j-button Primary>primary</j-button>
<j-button>Button</j-button>
<j-button disabled>Button disabled</j-button>
<j-button primary text>Text Button Primary</j-button>
<j-button text>Text Button</j-button>
<j-button text disabled>Text Button Disabled</j-button>
<j-button row>Button One Row</j-button>
<j-button text row>Text Button One Row </j-button>`,
        };
    },
};
</script>

<style>
.j-button.aa {
    width: 400px;
}
</style>
