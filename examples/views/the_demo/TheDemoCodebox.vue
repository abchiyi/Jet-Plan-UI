<template>
  <div>
    <h2>Code box</h2>
    <p>用于展示各种代码</p>
    <!-- Demo -->
    <demo-box title="点击反馈" :code="code" expand>
      <div>
        <p>默认状态</p>
        <j-code-box code="conosle.log('Hello world')" />
        <p>启用 can-copy</p>
        <j-code-box can-copy code="conosle.log('Hello world')" />
        <p>启用 can-copy 和 自定义图标</p>
        <j-code-box
          can-copy
          code="
conosle.log('Hello world');
        "
        >
          <template v-slot:icon-copy>
            <i class="bi bi-clipboard"></i>
          </template>
        </j-code-box>
        <br />
        <p>启用 can-copy 和 自定义图标以及在多行状态下</p>
        <j-code-box can-copy code="conosle.log('Hello world');">
          <template v-slot:icon-copy>
            <i class="bi bi-file-earmark-text"></i>
          </template>
        </j-code-box>
        <br />
        <j-code-box
          can-copy
          code="
conosle.log('Hello world');
conosle.log('Hello world');
        "
        >
          <template v-slot:icon-copy>
            <i class="bi bi-clipboard"></i>
          </template>
        </j-code-box>
        <br />
      </div>
    </demo-box>
    <doc-item name="Props:" title-is="h2">
      <li>
        <p>
          <c-highlighter>can-copy</c-highlighter>
          - type: Boolen, default:false
        </p>
        控制是否显示复制按钮
      </li>
    </doc-item>
    <doc-item name="Slots:" title-is="h2">
      <li>
        <p>
          <c-highlighter>icon-copy</c-highlighter>
          - 自定义复制按钮图标,默认为文本 'Copy'
        </p>
      </li>
    </doc-item>
  </div>
</template>

<script>
import pdn from "../../common/mix/popDemoName";
export default {
  mixins: [pdn],
  name: "the-demo-code-box",
  data() {
    return {
      code: `
<p>默认状态</p>
<j-code-box code="conosle.log('Hello world')" />

<p>启用 can-copy</p>
<j-code-box can-copy code="conosle.log('Hello world')" />

<p>启用 can-copy 和 自定义图标</p>
<j-code-box can-copy code="conosle.log('Hello world');">
    <template v-slot:icon-copy>
        <i class="bi bi-clipboard"></i>
    </template>
</j-code-box>
<br />

<p>启用 can-copy 和 自定义图标 在多行状态下</p>
<j-code-box can-copy code="conosle.log('Hello world');">
    <template v-slot:icon-copy>
        <i class="bi bi-file-earmark-text"></i>
    </template>
</j-code-box>
<br />

<j-code-box
can-copy
code="
conosle.log('Hello world');
conosle.log('Hello world');
">
    <template v-slot:icon-copy>
        <i class="bi bi-clipboard"></i>
    </template>
</j-code-box>
`,
    };
  },
};
</script>

<style scoped>
.j-row > * {
  display: block;
}
</style>
