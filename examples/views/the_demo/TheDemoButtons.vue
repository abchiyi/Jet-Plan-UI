<template>
    <div>
        <doc-item name="Button" tag="h1">
            <p>按钮组件</p>
            <hr />
        </doc-item>
        <doc-item name="示例：" tag="h2">
            <demo-box title="<j-button>" :code="code" id="fade">
                <h3>按钮</h3>
                <j-row warp id="buttons-button">
                    <j-button primary>Primary</j-button>
                    <j-button>Button</j-button>
                    <j-button disabled> disabled</j-button>
                </j-row>
                <h3>文本按钮</h3>
                <j-row warp id="buttons-button-text">
                    <j-button primary text>Text Button Primary</j-button>
                    <j-button text>Text Button</j-button>
                    <j-button text disabled>Text Button Disabled</j-button>
                </j-row>
                <h3>单行按钮</h3>
                <div id="buttons-row">
                    <j-button row>Button</j-button>
                    <j-button text row>Text Button </j-button>
                </div>
            </demo-box>
        </doc-item>
        <component-documentation v-bind="componentDoc" />
    </div>
</template>

<script>
import pdn from '../../common/mix/popDemoName';
import { Button } from '@ui';
export default {
    mixins: [pdn],
    name: 'the-demo-buttons',
    data() {
        return {
            componentDoc: {
                component: Button,
                description: {
                    props: {
                        disabled: '说明：禁用按钮。',
                        text: '说明：更改样式状态为仅显示文本。',
                        primary: '说明：主要按钮。',
                        row: '说明：单行按钮，‘display:block’。',
                    },
                },
            },
            code: `
<j-button Primary>primary</j-button>
<j-button>Button</j-button>
<j-button disabled>Button disabled</j-button>
<j-button text>Text Button</j-button>
<j-button text disabled>Text Button Disabled</j-button>
<j-button row>Button One Row</j-button>
<j-button text row>Text Button One Row </j-button>`,
        };
    },
};
</script>

<style>
</style>
