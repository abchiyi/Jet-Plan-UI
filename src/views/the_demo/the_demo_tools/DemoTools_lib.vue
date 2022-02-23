<template>
  <div id="too-lib">
    <p>
      工具存放以下路径中
      <inline-code>tool/lib</inline-code>
    </p>
    <!--功能函数 -->
    <article id='time-action-limit'>
      <h2>Class
        <inline-code class="">TimedActionLimit</inline-code>
      </h2>
      <demo-box
        title=''
        :code='code'
      >
      </demo-box>
    </article>

  </div>
</template>
<script>
import inlineCode from '../../../common/inlineCode.vue';
export default {
  components: { inlineCode },
  name: 'the-tool-lib',
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
