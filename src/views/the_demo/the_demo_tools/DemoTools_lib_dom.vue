<template>
  <p>
    工具存放以下路径中
    <inline-code>tool/lib/dom.js</inline-code>
  </p>
  <article id=''>
    <h2></h2>
    <demo-box
      title=''
      :code='code'
    >
    </demo-box>
  </article>
</template>
<script>
export default {
  name: 'the-tool-lib-dom',
  data: () => {
    return {
      //TODO示例代码
      code: undefined
    }
  }
};
</script>
<style>
</style>
