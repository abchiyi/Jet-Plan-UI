<template>
    <div>
        <h2>Input</h2>
        <demo-box title="input" :code="code">
            <j-input aria-label="demo-input" v-model="value" />
            <p>
                <strong>
                    {{ value }}
                </strong>
            </p>
        </demo-box>

        <component-documentation title-tag-props="h3" v-bind="componentDoc" />
    </div>
</template>
<script>
import { Input } from '@ui';
export default {
    name: 'the-demo-input',
    data: () => {
        return {
            code: `<j-input />`,
            value: 'Abc123',
            componentDoc: {
                component: Input,
                description: {
                    props: {
                        modelValue: '说明：用于绑定数据',
                        disabled: '说明：禁用组件。',
                    },
                },
            },
        };
    },
};
</script>
<style></style>
