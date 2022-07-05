<template>
    <div id="demo-fullscreen-mask">
        <h1>全屏遮罩</h1>
        <p>全屏阴影遮罩</p>
        <hr />
        <div id="doc">
            <doc-item tag="h2" name="<full-screen-mask>:">
                <li><p>组件无接口</p></li>
            </doc-item>
        </div>
        <demo-box title="<>" :code="code" :expand="true">
            <div>
                <j-button hover @click="mask">打开全屏遮罩</j-button>
            </div>
        </demo-box>
        <j-transition-fade>
            <full-screen-mask v-show="showMask" @click="mask" />
        </j-transition-fade>
    </div>
</template>
<script>
import pdn from '../../../common/mix/popDemoName';
export default {
    mixins: [pdn],
    name: 'demo-fullscreen-mask',
    data: () => {
        return {
            code: `
<full-screen-mask />
                `,
            showMask: false,
        };
    },
    methods: {
        mask() {
            this.showMask = !this.showMask;
        },
    },
};
</script>
<style></style>
