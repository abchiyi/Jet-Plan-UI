<template>
    <div id="demo-j-control-bar">
        <h1>控制条</h1>
        <p>
            强化
            <high-lighter>input</high-lighter>
            衍生组件的可点击范围,使得组件内任意区域均可触发点击
        </p>
        <hr />
        <j-control-bar for-id="to-reverse">
            <template v-slot:text>反向排列元素</template>
            <j-switch id="to-reverse" v-model="toReverse" />
        </j-control-bar>
        <j-control-bar for-id="no-background">
            <template v-slot:text>关闭背景</template>
            <j-switch id="no-background" v-model="noBackground" />
        </j-control-bar>
        <demo-box title="control-bar" :code="code">
            <div id="demo-default">
                <j-control-bar
                    :no-background="noBackground"
                    for-id="demo-switch"
                    :reverse="toReverse"
                >
                    <template v-slot:text>Switch</template>
                    <j-switch id="demo-switch" v-model="value" />
                </j-control-bar>
                <j-control-bar
                    :no-background="noBackground"
                    for-id="demo-checkbox"
                    :reverse="toReverse"
                >
                    <template v-slot:text>Checkbox</template>
                    <j-checkbox id="demo-checkbox" v-model="value" />
                </j-control-bar>
                <j-control-bar
                    :no-background="noBackground"
                    for-id="demo-radio1"
                    :reverse="toReverse"
                >
                    <template v-slot:text>Radio1</template>
                    <j-radio
                        id="demo-radio1"
                        value="demo-value1"
                        v-model="valueRadio"
                    />
                </j-control-bar>
                <j-control-bar
                    :no-background="noBackground"
                    for-id="demo-radio2"
                    :reverse="toReverse"
                >
                    <template v-slot:text>Radio2</template>
                    <j-radio
                        id="demo-radio2"
                        value="demo-value2"
                        v-model="valueRadio"
                    />
                </j-control-bar>
            </div>
        </demo-box>

        <component-documentation v-bind="componentDoc" />
        <doc-item name="Slots:" tag="h2">
            <ul>
                <li id="slot-text">
                    <p>
                        <high-lighter>text</high-lighter>
                        文本或任意你想要放置于内部的元素
                    </p>
                </li>
                <li id="slot-control">
                    <p>
                        <high-lighter>control</high-lighter>
                        只能放置 input 组件以及 input 衍生组件
                    </p>
                </li>
            </ul>
        </doc-item>
    </div>
</template>
<script>
import pdn from '../../../common/mix/popDemoName';
import { ControlBar } from '@ui';
export default {
    mixins: [pdn],

    DocItemname: 'the-demo-control-bar',
    data: () => {
        return {
            code: `
//Javascript
let value = false;
let valueRadio = [];
let toReverse = false,
let noBackground = false


// HTML
<div id="demo-default">
<j-control-bar
    for-id="demo-switch"
    :reverse="toReverse"
    :no-background="noBackground"
>
    <template v-slot:text>Switch</template>
        <j-switch id="demo-switch" v-model="value" />
</j-control-bar>`,
            value: false,
            valueRadio: [],
            toReverse: false,
            noBackground: false,
            componentDoc: {
                component: ControlBar,
                description: {
                    props: {
                        noBackground: '说明：不显示背景。',
                        forId: '说明：被控制组件的 id。',
                        reverse: '说明：反向排列元素。',
                    },
                },
            },
        };
    },
};
</script>
<style>
</style>
