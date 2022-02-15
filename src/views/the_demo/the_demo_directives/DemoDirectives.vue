<template>
  <h2>指令</h2>
  <p>这里是组件库预定的一些快捷指令，希望对你有所帮助。</p>
  <br>
  <demo-directives-focus />
  <hr>
  <br>
  <demo-directives-scroll-to />
</template>
<script>
import DemoDirectivesFocus from './DemoDirectivesFocus.vue'
import DemoDirectivesScrollTo from './DemoDirectivesScrollTo.vue'
export default {
  name: 'the-demo-directives',
  components: {
    DemoDirectivesFocus,
    DemoDirectivesScrollTo
  },
  data: () => {
    return {
    }
  }
};
</script>
<style>
</style>
