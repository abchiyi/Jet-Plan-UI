<template>
    <div>
        <h2>Checkbox</h2>
        <!-- Demo -->
        <j-control-bar for-id="disabled-checkbox">
            <template v-slot:text>禁用组件</template>
            <j-switch v-model="disabled" id="disabled-checkbox" />
        </j-control-bar>
        <demo-box title="Checkbox" :code="code">
            <div id="demo-checkbox-group">
                <div id="check-all-group">
                    <j-checkbox
                        id="check-all"
                        :value="data"
                        v-model="showData"
                        :disabled="disabled"
                    />
                    <label for="check-all">Check All</label>
                </div>
                <div id="checkbox-group">
                    <div v-for="item in data" :key="item">
                        <j-checkbox
                            :disabled="disabled"
                            :id="item"
                            :value="item"
                            v-model="showData"
                        />
                        <label :for="item">{{ item }}</label>
                    </div>
                </div>
            </div>
        </demo-box>
        <component-documentation title-tag-props="h3" v-bind="componentDoc" />
    </div>
</template>
<script>
import { CheckBox } from '@ui';
export default {
    name: 'inputs-checkbox',
    data: () => {
        return {
            componentDoc: {
                component: CheckBox,
                description: {
                    props: {
                        modelValue: '说明：用于绑定数据',
                        value: '说明：‘check-box’ 承载的值。',
                        name: '说明：‘check-box’ 名称。',
                        id: '说明：元素 id 。',
                        size: '说明：设置尺寸。',
                        disabled: '说明：禁用 ‘check-box’。',
                    },
                },
            },
            disabled: false,
            data: ['Checkbox1', 'Checkbox2', 'Checkbox3'],
            showData: ['Checkbox1'],
            code: `// javaScript
let data: ["Checkbox1", "Checkbox2", "Checkbox3"],
let showData: ["Checkbox1"];

// Html
<body>
    <p>Data:{{ showData }}</p>
    <div id="check-all-group">
        <j-checkbox id="check-all" :value="data" v-model="showData" />
        <label for="check-all">Check All</label>
    </div>
    <div id="checkbox-group">
        <div v-for="item in data" :key="item">
        <j-checkbox :id="item" :value="item" v-model="showData" />
        <label :for="item">{{ item }} </label>
        </div>
    </div>
</body>`,
        };
    },
};
</script>
<style></style>
