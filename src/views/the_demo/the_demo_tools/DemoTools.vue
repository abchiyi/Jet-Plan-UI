<template>
  <div>
    <h2>工具</h2>
    <p>这里是一些内置的工具函数&类，以及一些指令的函数版本。</p>
    <demo-tal />
  </div>
</template>
<script>
import demoTal from './DemoTimedActionLimit.vue'
export default {
  name: 'the-demo-tools',
  components: {
    demoTal
  },
  data: () => {
    return {
    }
  }
};
</script>
<style>
</style>
