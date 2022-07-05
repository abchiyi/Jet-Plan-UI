<template>
    <div id="the-demo-header">
        <h1>浮动页头</h1>
        <p>页头浮动栏,始终悬浮于内容上方的透明容器</p>
        <hr />
        <div id="doc">
            <doc-item tag="h2" name="<j-header>:">
                <li id="slots">
                    <doc-item name="Slots:">
                        <li id="slots-default">
                            <p>
                                <high-lighter>:default</high-lighter>
                                - 默认插槽
                            </p>
                        </li>
                    </doc-item>
                </li>
            </doc-item>
        </div>
        <demo-box title="<j-header>" :code="code" :expand="true"></demo-box>
    </div>
</template>
<script>
import pdn from '../../../common/mix/popDemoName';
export default {
    mixins: [pdn],
    name: 'the-demo-header',
    data: () => {
        return {
            code: `
<j-header>
    <template v-slot:default>
        Header
    </template>
</j-header>
                `,
        };
    },
};
</script>
<style></style>
