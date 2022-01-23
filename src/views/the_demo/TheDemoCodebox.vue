<template>
  <h2>Code box</h2>
  <p>用于展示各种代码</p>
  <!-- Demo -->
  <demo-box title="点击反馈" :code="code">
    <m-row X="center">
      <m-code-box code="conosle.log('Hello world')" />
    </m-row>
  </demo-box>
  <demo-doc>
    <template v-slot:prop>
      <li id="prop-code">
        <inline-code>code - String</inline-code>
        代码文本，该参数是必须的。
      </li>
      <li id="prop-lang">
        <inline-code>lang - String</inline-code>
        指定语言类型，不指定即为自动识别。
      </li>
    </template>
  </demo-doc>
</template>

<script>
import inlineCode from "../../common/inlineCode.vue";
export default {
  components: { inlineCode },
  name: "the-demo-code-box",
  data() {
    return {
      code: `<m-code-box code="conosle.log('Hello world')"  lang="javascript" />`
    };
  }
};
</script>

<style>
</style>
