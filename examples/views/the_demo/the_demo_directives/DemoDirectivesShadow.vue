<template>
    <article id="shadow">
        <doc-item name="v-shadow:" tag="h2">
            <ul>
                <li>
                    <p><strong>Arg:</strong></p>
                    <p>range - top | button | left | right</p>
                </li>
                <li>
                    <p><strong>Value:</strong></p>
                    <p>: type - Number, range - 1~30</p>
                    设置阴影强度,建议1~30,最大值可超过30
                </li>
            </ul>
        </doc-item>
        <j-control-bar :active="false" for-id="demo-checkbox">
            <template v-slot:text>Checkbox</template>
            <j-slider :max="30" v-model="value" />
        </j-control-bar>
        <demo-box title="v-shadow">
            <j-row X="center">
                <j-cube class="demo-box" v-shadow:bottom="value">
                    Intensity:{{ value }}
                </j-cube>
            </j-row>
        </demo-box>
        <demo-box
            title="Html"
            code='
<div
    style="height=100px;width=100px;background=red;"
    v-shadow:bottom="value"
    >
    <p>Test</p>
</div>
        '
        />
        <demo-box
            title="Script"
            code="
export default{
    data(){
        return {
            value:10
        }
    },
}
        "
        />
    </article>
</template>
<script>
export default {
    name: 'v-shadow',
    data: () => {
        return {
            value: 10,
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
