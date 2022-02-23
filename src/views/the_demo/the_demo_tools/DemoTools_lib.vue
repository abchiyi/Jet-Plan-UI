<template>
  <div id="too-lib">
    <p>
      工具存放以下路径中
      <inline-code>tool/lib</inline-code>
    </p>
    <!--TimeActionLimit -->
    <article id='time-action-limit'>
      <h2>Class
        <inline-code class="">TimedActionLimit</inline-code>
      </h2>
      <demo-box
        title='Class TimedActionLimit'
        :code='code'
      >
        <m-cube
          id="demo-show-click-conter"
          @click="click"
        >
          {{ clickConter}}
        </m-cube>
      </demo-box>
    </article>
  </div>
</template>
<script>
import inlineCode from '../../../common/inlineCode.vue';
import { TimedActionLimit } from '@/tool/lib'
const tal = new TimedActionLimit(1000);

export default {
  components: { inlineCode },
  name: 'the-tool-lib',
  data: () => {
    return {
      //TODO示例代码
      code: undefined,
      clickConter: 0
    }
  },
  methods: {
    click () {
      tal.action(() => {
        this.clickConter++
      })
    }
  }
};
</script>
<style>
#demo-show-click-conter {
  font-family: SarasaMono;
  font-size: 48px;
}
</style>
