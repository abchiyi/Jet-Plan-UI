<template>
    <div>
        <h2>Input</h2>
        <demo-box title="input" :code="code">
            <!-- <j-input aria-label="demo-input" v-model="value" /> -->
            <j-input id="test" aria-label="demo-input" v-model="value">
                <template v-slot:before>
                    <j-button text>
                        <i class="bi bi-search"></i>
                    </j-button>
                </template>
                <template v-slot:after>
                    <j-button text>
                        <i class="bi bi-search"></i>
                    </j-button>
                </template>
            </j-input>

            <j-input disabled id="test" aria-label="demo-input" v-model="value">
                <template v-slot:before>
                    <j-button text>
                        <i class="bi bi-search"></i>
                    </j-button>
                </template>
                <template v-slot:after>
                    <j-button text>
                        <i class="bi bi-search"></i>
                    </j-button>
                </template>
            </j-input>
            <br />
            <br />

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
