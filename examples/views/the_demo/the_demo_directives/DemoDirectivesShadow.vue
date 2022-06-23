<template>
    <article id="shadow">
        <doc-item name="v-shadow:" title-is="h2">
            <li>
                <p>
                    <high-lighter>:arg</high-lighter>
                    : range - top | nottom | left | right
                </p>
            </li>
            <li>
                <p>
                    <high-lighter>="value"</high-lighter>
                    : type - Number, range - 1~30
                </p>
                设置阴影强度,建议1~30,最大值可超过30
            </li>
        </doc-item>
        <j-control-bar
            :active="false"
            for-id="demo-checkbox"
            :reverse="toReverse"
        >
            <template v-slot:text>Checkbox</template>
            <j-slider max="30" v-model="value" />
        </j-control-bar>
        <demo-box title="v-shaow" :code="code">
            <j-row X="center">
                <j-cube class="demo-box" v-shadow:bottom="value">
                    Intensity:{{ value }}
                </j-cube>
            </j-row>
        </demo-box>
    </article>
</template>
<script>
export default {
    name: 'v-shaow',
    data: () => {
        return {
            code: `
// Javascript
let value = 10;
// HTML
<body>
    <style>
        .demo-box {
            background: var(--foreground) !important;
            color: var(--text) !important;
            height: 200px;
            width: 150px;
            border: unset;
        }
    </style>
    <j-cube class="demo-box" v-shadow:bottom="value" >
        Intensity:{{value}}
    </j-cube>
</body>`,
            value: '10',
        };
    },
};
</script>
<style>
.demo-box {
    background: var(--foreground) !important;
    color: var(--text) !important;
    height: 200px;
    width: 150px;
    border: unset;
}
</style>
