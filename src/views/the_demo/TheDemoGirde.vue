<template>
  <h2>基础栅格</h2>
  <p>基于 flexbox 的24栏网格系统</p>

  <h2>示例</h2>
  <p>通过使用使用组件 'm-col' 的 col 属性来组合网格</p>
  <p>这个给示例中使用了组件 'm-row' 和 'm-col'</p>
  <!-- demo -->
  <div id="the-demo-girde">
    <m-demo-box title="基础栅格" :code="code" :expand="v1">
      <slot name="demo">
        <m-row class="girde-item" v-for="n in 4" :key="n">
          <m-col :col="n * 4">
            <m-cube class="girde-cube">{{ n * 4 }}</m-cube>
          </m-col>
          <m-col :col="24 - n * 2">
            <m-cube class="girde-cube" dark> {{ 24 - n * 4 }} </m-cube>
          </m-col>
        </m-row>
      </slot>
    </m-demo-box>
  </div>
  <!-- m-col props -->
  <table style="width:100%">
    <h2>Props</h2>
    <m-row tag="tr" space-mode="between">
      <td>名称</td>
      <td>功能</td>
      <td>参数类型</td>
      <td>可选值</td>
      <td>默认</td>
    </m-row>
    <m-row title="tag" tag="tr" space-mode="between">
      <td>tag</td>
      <td>指定渲染标签</td>
      <td>String</td>
      <td>html标签</td>
      <td>div</td>
    </m-row>
    <m-row title="col" tag="tr" space-mode="between">
      <td>col</td>
      <td>未特定屏幕尺寸宽度定义</td>
      <td>Number</td>
      <td>0~24</td>
      <td>-</td>
    </m-row>
    <m-row title="offset" tag="tr" space-mode="between">
      <td>offset</td>
      <td>未特定屏幕宽度下设置位移</td>
      <td>Number</td>
      <td>1~24</td>
      <td>-</td>
    </m-row>
    <m-row title="xs" tag="tr" space-mode="between">
      <td>xs</td>
      <td>>575px响应</td>
      <td>Number</td>
      <td>-</td>
      <td>-</td>
    </m-row>
    <m-row title="sm" tag="tr" space-mode="between">
      <td>sm</td>
      <td>≤576px响应</td>
      <td>Number</td>
      <td>-</td>
      <td>-</td>
    </m-row>
    <m-row title="md" tag="tr" space-mode="between">
      <td>md</td>
      <td>≤768px响应</td>
      <td>Number</td>
      <td>-</td>
      <td>-</td>
    </m-row>
    <m-row title="lg" tag="tr" space-mode="between">
      <td>lg</td>
      <td>≤992px响应</td>
      <td>Number</td>
      <td>-</td>
      <td>-</td>
    </m-row>
    <m-row title="xl" tag="tr" space-mode="between">
      <td>xl</td>
      <td>≤1200px响应</td>
      <td>Number</td>
      <td>-</td>
      <td>-</td>
    </m-row>
  </table>
</template>

<script>
export default {
  mounted() {
    this.$emit("test", "girade");
  },
  name: "grid-demo",
  components: {},
  data() {
    return {
      code: `<m-row class="girde-item" v-for="n in 4" :key="n">
    <m-col :col="n * 4"><m-cube class="girde-cube">{{ n * 4 }}</m-cube></m-col>
    <m-col :col="24 - n * 2">
        <m-cube class="girde-cube" dark> {{ 24 - n * 4 }} </m-cube>
    </m-col>
</m-row>

<style>
#the-demo-girde {
background: var(--bg-1);
border-radius: 8px;
padding: 20px;
}
.girde-item {
margin-bottom: 8px;
}
.girde-cube {
height: 36px;
width: 100%;
}
</style>
`,
      v1: true,
      position: ["start", "center", "end", "around", "between"]
    };
  }
};
</script>

<style>
tr > td:nth-child(4),
tr > td:nth-child(3),
tr > td:last-child,
tr > td:first-child {
  width: 200px;
}
#the-demo-girde {
  background: var(--bg-1);
  border-radius: 8px;
  padding: 20px;
}
.girde-item {
  margin-bottom: 8px;
}
.girde-cube {
  height: 36px;
  width: 100%;
}
</style>
