<template>
    <div>
        <h1>指令</h1>
        <p>这里是组件库预定的一些快捷指令，希望对你有所帮助。</p>
        <hr />

        <demo-directives-focus />
        <br />
        <!-- <demo-directives-scroll-to /> -->
        <br />
        <demo-directives-shadow />
        <br />
        <demo-directives-re-screen-size />
        <br />
        <demo-directives-auto-color />
    </div>
</template>
<script>
import pdn from '../../../common/mix/popDemoName';
import DemoDirectivesFocus from './DemoDirectivesFocus.vue';
// import DemoDirectivesScrollTo from './DemoDirectivesScrollTo.vue';
import DemoDirectivesShadow from './DemoDirectivesShadow.vue';
import DemoDirectivesReScreenSize from './DemoDirectivesReScreenSize.vue';
import DemoDirectivesAutoColor from './DemoDirectivesAutoColor.vue';
export default {
    mixins: [pdn],
    name: 'the-demo-directives',
    components: {
        DemoDirectivesFocus,
        // DemoDirectivesScrollTo,
        DemoDirectivesShadow,
        DemoDirectivesAutoColor,
        DemoDirectivesReScreenSize,
    },
    data: () => {
        return {};
    },
};
</script>
<style></style>
