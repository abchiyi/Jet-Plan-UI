<template>
    <div>
        <h1>工具</h1>
        <p>这里是一些内置的工具函数&类，以及一些指令的函数版本。</p>
        <hr />

        <demo-tal />
        <demo-scroll-to />
        <demo-shadow-painter />
    </div>
</template>
<script>
import pdn from '../../../common/mix/popDemoName';
import demoTal from './DemoTimedActionLimit.vue';
import demoShadowPainter from './DemoShadowPrinter.vue';
export default {
    mixins: [pdn],
    name: 'the-demo-tools',
    components: {
        demoTal,
        demoShadowPainter,
    },
    data: () => {
        return {};
    },
};
</script>
<style>
</style>
