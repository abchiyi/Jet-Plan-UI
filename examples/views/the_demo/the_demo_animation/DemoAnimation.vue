<template>
    <div>
        <h2>动画组件</h2>
        <p>使用动画组件可以快速使自定义组件拥有与设计风格统一的风格。</p>
        <p>
            使用前请参考官方
            <j-button
                text
                tag="a"
                href="https://v3.cn.vuejs.org/guide/transitions-overview.html"
                >Transition 文档</j-button
            >
            。
        </p>
        <br />
        <demo-animation-fade></demo-animation-fade>
        <br />
        <demo-animation-slide></demo-animation-slide>
        <br />
        <demo-animation-folded></demo-animation-folded>
    </div>
</template>
<script>
import pdn from '../../../common/mix/popDemoName';
import DemoAnimationFade from './DemoAnimationFade.vue';
import DemoAnimationSlide from './DemoAnimationSlide.vue';
import DemoAnimationFolded from './DemoAnimationFolded.vue';

export default {
    mixins: [pdn],
    name: 'DemoAnimation',
    components: {
        DemoAnimationFade,
        DemoAnimationSlide,
        DemoAnimationFolded,
    },
};
</script>

<style></style>
