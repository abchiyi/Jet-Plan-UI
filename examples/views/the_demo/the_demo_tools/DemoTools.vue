<template>
    <div>
        <h2>工具</h2>
        <p>这里是一些内置的工具函数&类，以及一些指令的函数版本。</p>
        <hr />
        <br />
        <demo-tal />
        <hr />
        <br />
        <demo-scroll-to />
        <br />
        <hr />
        <demo-shadow-painter />
    </div>
</template>
<script>
import pdn from '../../../common/mix/popDemoName';
import demoTal from './DemoTimedActionLimit.vue';
import demoScrollTo from './DemoScrollTo.vue';
import demoShadowPainter from './DemoShadowPrinter.vue';
export default {
    mixins: [pdn],
    name: 'the-demo-tools',
    components: {
        demoTal,
        demoScrollTo,
        demoShadowPainter,
    },
    data: () => {
        return {};
    },
};
</script>
<style>
</style>
