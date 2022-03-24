<template>
  <article id="auto-color">
    <doc-item name="v-auto-color:" title-is="h2">
      <p>自动控制元素文本色彩，在明/暗两色之间自动切换，用于主题的自适应设计</p>
      <!-- TODO 跳转到主题设计 -->
      <p>
        自动切换的文本色彩需预先在主题中设置。被控制的元素必须已设置了背景色，否则指令不会生效，子元素如无背景色可将指令设置到父元素
      </p>
    </doc-item>
    <hr />

    <demo-box title="v-auto-color" :code="code" expand>
      <div>
        <j-control-bar for-id="color-switch">
          <template v-slot:text> 切换色彩 </template>
          <j-switch id="color-switch" v-model="dark" />
        </j-control-bar>
        <j-cube v-auto-color :class="['light']" :dark="dark">Test Text</j-cube>
      </div>
    </demo-box>
  </article>
</template>
<script>
export default {
  name: "the-demo-auto-color",
  data() {
    return {
      dark: false,
      code: `
//JavaScript
let dark = false;
// HTML
<j-control-bar for-id="color-switch">
    <template v-slot:text> 切换色彩 </template>
    <j-switch id="color-switch" v-model="dark" />
</j-control-bar>
<div v-auto-color :class="[!dark?'light':'']">Test Text</div>
// CSS
div{
    background:#000
}
div{
    background:#fff
}
      `,
    };
  },
};
</script>
<style>
.j-cube.light {
  color: inherit;
}
</style>
