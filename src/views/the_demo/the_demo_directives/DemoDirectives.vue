<template>
  <h2>指令</h2>
  <p>这里是组件库预定的一些快捷指令，希望对你有所帮助。</p>
  <br>
  <demo-directives-focus />
</template>
<script>
import DemoDirectivesFocus from './DemoDirectivesFocus.vue'
export default {
  name: 'the-demo-directives',
  components: {
    DemoDirectivesFocus
  },
  data: () => {
    return {
    }
  }
};
</script>
<style>
</style>
