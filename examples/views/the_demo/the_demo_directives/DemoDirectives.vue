<template>
  <div>
    <h2>指令</h2>
    <p>这里是组件库预定的一些快捷指令，希望对你有所帮助。</p>
    <br />
    <demo-directives-focus />
    <hr />
    <br />
    <demo-directives-scroll-to />
    <hr />
    <br />
    <demo-directives-shadow />
    <hr />
    <br />
    <demo-directives-re-screen-size />
    <hr />
    <br />
    <demo-directives-auto-color />
  </div>
</template>
<script>
import pdn from "../../../common/mix/popDemoName";
import DemoDirectivesFocus from "./DemoDirectivesFocus.vue";
import DemoDirectivesScrollTo from "./DemoDirectivesScrollTo.vue";
import DemoDirectivesShadow from "./DemoDirectivesShadow.vue";
import DemoDirectivesReScreenSize from "./DemoDirectivesReScreenSize.vue";
import DemoDirectivesAutoColor from "./DemoDirectivesAutoColor.vue";
export default {
  mixins: [pdn],
  name: "the-demo-directives",
  components: {
    DemoDirectivesFocus,
    DemoDirectivesScrollTo,
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
