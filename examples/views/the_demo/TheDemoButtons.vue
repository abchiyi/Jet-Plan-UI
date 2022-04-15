<template>
    <div>
        <h1>按钮</h1>
        <p>基本按钮组件</p>
        <!-- Demo -->
        <demo-box title="<j-button>" :code="code" id="fade">
            <div>
                <j-row id="buttons-button" X="center">
                    <j-button primary>Primary</j-button>
                    <j-button primary disabled>Primary</j-button>
                    <j-button>Button</j-button>
                    <j-button disabled>Button disabled</j-button>
                </j-row>
                <j-row id="buttons-button-text" X="center">
                    <j-button primary text>Text Button Primary</j-button>
                    <j-button primary text disabled
                        >Text Button Primary</j-button
                    >
                    <j-button text>Text Button</j-button>
                    <j-button text disabled>Text Button Disabled</j-button>
                </j-row>
                <br />
                <div id="buttons-row">
                    <j-button row>Button One Row</j-button>
                    <j-button text row>Text Button One Row</j-button>
                </div>
            </div>
        </demo-box>
        <doc-item name="Props:" tag-is="h2">
            <li id="prop-button-text">
                <high-lighter>text - Boolean</high-lighter>
                按钮外观切换，使用常规按钮还是文本按钮
                <high-lighter>default - false</high-lighter>
            </li>
            <li id="prop-button-primary">
                <high-lighter>primary - Boolean</high-lighter>
                按钮外观切换，按钮外观展示为带主题色的主要按钮
                <high-lighter>default - false</high-lighter>
            </li>
            <li id="prop-button-row">
                <high-lighter>row - Boolean</high-lighter>
                使按钮占据一行
                <high-lighter>default - false</high-lighter>
            </li>
            <li id="prop-button-disabled">
                <high-lighter>disabled - Boolean</high-lighter>
                禁用按钮
                <high-lighter>default - false</high-lighter>
            </li>
            <li id="prop-others">
                按钮组件外层使用
                <high-lighter>j-action-feedback</high-lighter>
                组件渲染，其余
                <high-lighter>Prop</high-lighter>
                参考
                <j-button @click="$router.push('/action-feedback')" tag="a" text
                    >j-action-feedback</j-button
                >
                组件
            </li>
        </doc-item>
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
