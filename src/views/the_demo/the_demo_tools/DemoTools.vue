<template>
  <div>
    <h2>工具</h2>
    <p>这里是一些内置的工具函数&类，以及一些指令的函数版本。</p>
    <lib></lib>
    <dom></dom>
  </div>
</template>
<script>
import Lib from './DemoTools_lib.vue'
import Dom from './DemoTools_lib_dom.vue'
export default {
  name: 'the-demo-tools',
  components: {
    Lib,
    Dom,
  },
  data: () => {
    return {
    }
  }
};
</script>
<style>
</style>
