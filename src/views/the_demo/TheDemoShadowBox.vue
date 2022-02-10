<template>
  <strong>ShadowBox</strong>
  <demo-box
    title="ShadowBox"
    :code="code"
  >
    <m-row
      Y=center
      style="height:150px"
      space-mode="between"
    >
      <m-shaodw-box
        class="demo"
        v-for="n in 5"
        :key="n"
        :intensity="n"
      >Test{{ n }}</m-shaodw-box>
    </m-row>
  </demo-box>
</template>
<script>
export default {
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
.demo {
  background-color: var(--primary);
  border-radius: var(--s-radius);
  color: white;
  height: 100px;
  width: 100px;
}
</style>
