<template>
    <div id="demo-j-control-bar">
        <doc-item id="describes" name="控制条组件:" title-is="h2">
            <p>
                强化
                <high-lighter>input</high-lighter>
                衍生组件的可点击范围,使得组件内任意区域均可触发点击
            </p>
        </doc-item>
        <hr />
        <doc-item name="<j-control-bar> :" title-is="h2">
            <li id="j-control-bar-props">
                <doc-item name="Props:" title-is="h3">
                    <li id="prop-for-id">
                        <p>
                            <high-lighter>for-id</high-lighter>
                            type - String, required - true
                        </p>
                        <p>
                            被控制组件的
                            <high-lighter>id</high-lighter>
                            ,这个值是必须的
                        </p>
                    </li>
                    <li id="prop-reverse">
                        <p>
                            <high-lighter>reverse</high-lighter>
                            type - Boolean, default - false
                        </p>
                        <p>反向排列内部元素</p>
                    </li>
                    <li id="prop-no-background">
                        <p>
                            <high-lighter>no-background</high-lighter>
                            type - Boolean, default - false
                        </p>
                        <p>不设置背景</p>
                    </li>
                </doc-item>
            </li>
            <li id="j-control-bar-slots">
                <doc-item name="Slots:" title-is="h3">
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
                </doc-item>
            </li>
        </doc-item>

        <j-control-bar for-id="to-reverse">
            <template v-slot:text>反向排列元素</template>
            <j-switch id="to-reverse" v-model="toReverse" />
        </j-control-bar>
        <demo-box title="<j-control-bar>" :code="code">
            <div id="demo-default">
                <j-control-bar for-id="demo-switch" :reverse="toReverse">
                    <template v-slot:text>Switch</template>
                    <j-switch id="demo-switch" v-model="value" />
                </j-control-bar>
                <j-control-bar for-id="demo-checkbox" :reverse="toReverse">
                    <template v-slot:text>Checkbox</template>
                    <j-checkbox id="demo-checkbox" v-model="value" />
                </j-control-bar>
                <j-control-bar for-id="demo-radio1" :reverse="toReverse">
                    <template v-slot:text>Radio1</template>
                    <j-radio
                        id="demo-radio1"
                        value="demo-value1"
                        v-model="valueRadio"
                    />
                </j-control-bar>
                <j-control-bar for-id="demo-radio2" :reverse="toReverse">
                    <template v-slot:text>Radio2</template>
                    <j-radio
                        id="demo-radio2"
                        value="demo-value2"
                        v-model="valueRadio"
                    />
                </j-control-bar>
            </div>
        </demo-box>
    </div>
</template>
<script>
import pdn from '../../../common/mix/popDemoName';
export default {
    mixins: [pdn],
    name: 'the-demo-control-bar',
    data: () => {
        return {
            code: `
//Javascript
let value = false;
let valueRadio = [];
let toReverse = false,


// HTML
<div id="demo-default">
<j-control-bar
    for-id="demo-switch"
    :reverse="toReverse"
>
    <template v-slot:text>Switch</template>
        <j-switch id="demo-switch" v-model="value" />
</j-control-bar>
<j-control-bar
    for-id="demo-checkbox"
    :reverse="toReverse"
>
    <template v-slot:text>Checkbox</template>
        <j-checkbox
            id="demo-checkbox"
            v-model="value"
        />
</j-control-bar>
<j-control-bar
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
    for-id="demo-radio2"
    :reverse="toReverse"
>
    <template v-slot:text>Radio2</template>
        <j-radio
            id="demo-radio2"
            value="demo-value2"
            v-model="valueRadio"
        />
</j-control-bar>`,
            value: false,
            valueRadio: [],
            toReverse: false,
        };
    },
};
</script>
<style></style>
