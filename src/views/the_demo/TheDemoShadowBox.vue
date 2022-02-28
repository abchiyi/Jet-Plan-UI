<template>
  <div>
    <strong>ShadowBox</strong>
    <demo-box
      title="ShadowBox"
      :code="code"
    >

    </demo-box>
  </div>

</template>
<script>
import pdn from '../../common/mix/popDemoName'
export default {
  mixins: [pdn],
  name: "the-demo-ShadowBox",
  data: () => {
    return {
      //TODO示例代码
      code: undefined,
    };
  },
};
</script>
<style scope >
</style>
