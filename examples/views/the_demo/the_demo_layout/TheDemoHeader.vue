<template>
    <div id="the-demo-header">
        <h1>浮动页头</h1>
        <p>页头浮动栏,始终悬浮于内容上方的透明容器</p>
        <hr />
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
    <h1>Header</h1>
</j-header>
                `,
        };
    },
};
</script>
<style></style>
