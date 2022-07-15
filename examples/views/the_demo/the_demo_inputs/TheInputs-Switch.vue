<template>
    <div>
        <h2>Switch</h2>
        <demo-box title="Switch" :code="code">
            <div id="demo-switch-group">
                <div>
                    <j-switch id="demo-switch" v-model="value" />
                    <label for="demo-switch">
                        {{ value ? 'on' : 'off' }}
                    </label>
                </div>
                <div>
                    <j-switch
                        id="demo-switch-disabled"
                        disabled
                        v-model="value"
                    />
                    <label for="demo-switch-disabled">
                        disabled-{{ value ? 'on' : 'off' }}
                    </label>
                </div>
            </div>
        </demo-box>
        <component-documentation title-tag-props="h3" v-bind="componentDoc" />
    </div>
</template>
<script>
import { Switch } from '@ui';
export default {
    name: 'the-demo-switch',
    data: () => {
        return {
            componentDoc: {
                component: Switch,
                description: {
                    props: {
                        modelValue: '说明：用于绑定数据',
                        id: '说明：元素 id 。',
                        size: '说明：设置尺寸。',
                        disabled: '说明：禁用 ‘switch’。',
                    },
                },
            },
            value: false,

            code: `
//Script
let value = false;
// Html
<div>
    <j-switch id="demo-switch" v-model="value" />
    <label for="demo-switch">
    {{ value ? "on" : "off" }}
    </label>
</div>
<div>
    <j-switch id="demo-switch-disabled" disabled v-model="value" />
    <labed for="demo-switch-disabled">
    disabled-{{ value ? "on" : "off" }}
    </labed>
</div>
      `,
        };
    },
};
</script>
<style></style>
