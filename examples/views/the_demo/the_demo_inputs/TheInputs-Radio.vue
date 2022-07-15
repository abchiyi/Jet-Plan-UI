<template>
    <div>
        <h2>Radio</h2>
        <j-control-bar for-id="disabled-radio">
            <template v-slot:text>禁用组件</template>
            <j-switch v-model="disabled" id="disabled-radio" />
        </j-control-bar>
        <demo-box title="Radio" :code="code">
            <ul id="demo-radio-group">
                <li v-for="v in data" :key="v">
                    <j-radio
                        :disabled="disabled"
                        :id="v"
                        name="radioData"
                        v-model="radioData"
                        :value="v"
                    />
                    <label :for="v">{{ v }}</label>
                </li>
            </ul>
        </demo-box>
        <component-documentation title-tag-props="h3" v-bind="componentDoc" />
    </div>
</template>
<script>
import { Radio } from '@ui';
export default {
    name: 'the-inputs-radio',
    data: () => {
        return {
            componentDoc: {
                component: Radio,
                description: {
                    props: {
                        modelValue: '说明：用于绑定数据',
                        id: '说明：元素 id 。',
                        size: '说明：设置尺寸。',
                        disabled: '说明：禁用组件。’。',
                        name: '说明：‘Radio’名称。',
                        value: '说明：‘Radio’所承载的值。',
                    },
                },
            },
            data: ['Radio1', 'Radio2', 'Radio3'],
            radioData: undefined,
            disabled: false,
            code: `
// Script
let data = ["Radio1", "Radio2", "Radio3"]
let radioData;

// Html
<body>
    <div v-for="v in data" :key="v">
        <j-radio :id="v" name="radioData" v-model="radioData" :value="v" />
        <label :for="v">{{ v }}</label>
    </div>
</body>`,
        };
    },
};
</script>
<style></style>
