<template>
    <div>
        <doc-item :name="title" tag="h2">
            <p>滑动输入组件。</p>
            <hr />
        </doc-item>
        <!-- Demo  -->
        <!-- TODO 添加演示代码。  -->
        <demo-box :title="title">
            <p class="text-hint">Value: {{ value }}</p>
            <j-slider v-model="value" />
            <p class="text-hint">禁用组件：</p>
            <j-slider v-model="value" disabled />
        </demo-box>
        <!-- Doc  -->
        <component-documentation title-tag-props="h3" v-bind="componentDoc" />
    </div>
</template>
<script>
import { Slider as COMPONENT } from '@ui';
const NAME = 'Slider';
export default {
    name: 'the-demo-' + NAME,
    data() {
        return {
            value: 45,
            title: NAME + ':',
            componentDoc: {
                component: COMPONENT,
                description: {
                    props: {
                        modelValue: '说明：用于绑定值。',
                        disabled: '说明：禁用组件。',
                        min: '说明：最小值。',
                        max: '说明：最大值。',
                        step: '说明：步长。',
                    },
                },
            },
        };
    },
};
</script>
<style>
</style>
