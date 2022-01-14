<template>
  <h2>基础栅格</h2>
  <p>基于 flexbox 的24栏网格系统</p>
  <h2>示例1</h2>
  <p>通过使用使用组件 'm-col' 的 col 属性来组合网格</p>
  <p>这个给示例中使用了组件 'm-row' 和 'm-col'</p>
  <!-- demo 基础栅格 -->
  <demo-box title="基础栅格" :code="code1" :expand="v1">
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
  </demo-box>
  <h2>使用 offset 定位</h2>
  <!-- demo offset 定位 -->
  <demo-box title="flex 定位" :code="code2" :expand="v1">
    <slot name="demo">
      <m-row class="girde-item" v-for="n in 4" :key="n">
        <m-col :col="4" :offset="n * 2">
          <m-cube class="girde-cube">{{ n * 4 }}</m-cube>
        </m-col>
      </m-row>
    </slot>
  </demo-box>
  <!-- demo m-row 定位 -->
  <demo-box title="flex 定位" :code="code3" :expand="v1">
    <m-row space-mode="between">
      <label for="y-top">Y 轴顶部对齐</label>
      <m-radio id="y-top" value="top" v-model="y" />
    </m-row>
    <m-row space-mode="between">
      <label for="y-center">Y 轴居中</label>
      <m-radio id="y-center" value="center" v-model="y" />
    </m-row>
    <m-row space-mode="between">
      <label for="y-bottom">Y 轴底部对齐</label>
      <m-radio id="y-bottom" value="bottom" v-model="y" />
    </m-row>
    <m-row space-mode="between">
      <label for="x-start">X 轴顶部对齐</label>
      <m-radio id="x-start" value="start" v-model="x" />
    </m-row>
    <m-row space-mode="between">
      <label for="x-center">X 轴居中</label>
      <m-radio id="x-center" value="center" v-model="x" />
    </m-row>
    <m-row space-mode="between">
      <label for="x-end">X 轴末尾对齐</label>
      <m-radio id="x-end" value="end" v-model="x" />
    </m-row>
    <slot name="demo">
      <m-row class="row girde-item" :Y="y" :X="x">
        <m-col :col="4"><m-cube class="girde-cube"/></m-col>
        <m-col :col="4"><m-cube class="girde-cube" style="height:48px"/></m-col>
        <m-col :col="4"><m-cube class="girde-cube" style="height:72px"/></m-col>
      </m-row>
    </slot>
  </demo-box>
  <!-- --------------- Row --------------- -->
  <h2>组件 'm-row' props</h2>
  <div style="overflow-x:scroll">
    <table style="width:768px">
      <tr space-mode="between">
        <td>名称</td>
        <td>功能</td>
        <td>参数类型</td>
        <td>可选值</td>
        <td>默认</td>
      </tr>
      <tr space-mode="between">
        <td>tag</td>
        <td>指定渲染标签</td>
        <td>String</td>
        <td>html标签</td>
        <td>div</td>
      </tr>
      <tr space-mode="between">
        <td>X</td>
        <td>设定 X 轴 对齐</td>
        <td>String</td>
        <td>["start", "center", "end"]</td>
        <td>Satrt</td>
      </tr>
      <tr space-mode="between">
        <td>Y</td>
        <td>设定 Y 轴 对齐</td>
        <td>String</td>
        <td>["top", "center", "bottom"]</td>
        <td>top</td>
      </tr>
      <tr space-mode="between">
        <td>warp</td>
        <td>控制元素是否换行</td>
        <td>Boolean</td>
        <td>true/false</td>
        <td>false</td>
      </tr>
      <tr space-mode="between">
        <td>reverse</td>
        <td>反向排列元素</td>
        <td>Boolean</td>
        <td>true/false</td>
        <td>false</td>
      </tr>
      <tr space-mode="between">
        <td>noGap</td>
        <td>取消 'm-col' 组件间间隙</td>
        <td>Boolean</td>
        <td>true/false</td>
        <td>false</td>
      </tr>
    </table>
  </div>

  <!-- m-row props -->
  <h2>组件 'm-col' props</h2>
  <div style="overflow-x:scroll">
    <table style="width:768px">
      <tr space-mode="between">
        <td>名称</td>
        <td>功能</td>
        <td>参数类型</td>
        <td>可选值</td>
        <td>默认</td>
      </tr>
      <tr space-mode="between">
        <td>tag</td>
        <td>指定渲染标签</td>
        <td>String</td>
        <td>html标签</td>
        <td>div</td>
      </tr>
      <!-- col -->
      <tr space-mode="between">
        <td>col</td>
        <td>未特定屏幕尺寸宽度定义</td>
        <td>Number</td>
        <td>0~24</td>
        <td>-</td>
      </tr>
      <tr space-mode="between">
        <td>xs</td>
        <td>>575px响应</td>
        <td>Number</td>
        <td>0~24</td>
        <td>-</td>
      </tr>
      <tr space-mode="between">
        <td>sm</td>
        <td>≤576px响应</td>
        <td>Number</td>
        <td>0~24</td>
        <td>-</td>
      </tr>
      <tr space-mode="between">
        <td>md</td>
        <td>≤768px响应</td>
        <td>Number</td>
        <td>0~24</td>
        <td>-</td>
      </tr>
      <tr space-mode="between">
        <td>lg</td>
        <td>≤992px响应</td>
        <td>Number</td>
        <td>0~24</td>
        <td>-</td>
      </tr>
      <tr space-mode="between">
        <td>xl</td>
        <td>≤1200px响应</td>
        <td>Number</td>
        <td>0~24</td>
        <td>-</td>
      </tr>
      <!-- col offset -->
      <tr space-mode="between">
        <td>offset</td>
        <td>未特定屏幕宽度下设置位移</td>
        <td>Number</td>
        <td>1~24</td>
        <td>-</td>
      </tr>
      <tr space-mode="between">
        <td>offsetXs</td>
        <td>>575px响应偏移</td>
        <td>Number</td>
        <td>1~24</td>
        <td>-</td>
      </tr>
      <tr space-mode="between">
        <td>offsetSm</td>
        <td>≤576px响应偏移</td>
        <td>Number</td>
        <td>1~24</td>
        <td>-</td>
      </tr>
      <tr space-mode="between">
        <td>offsetMd</td>
        <td>≤768px响应偏移</td>
        <td>Number</td>
        <td>1~24</td>
        <td>-</td>
      </tr>
      <tr space-mode="between">
        <td>offsetLg</td>
        <td>≤992px响应偏移</td>
        <td>Number</td>
        <td>1~24</td>
        <td>-</td>
      </tr>
      <tr space-mode="between">
        <td>offsetXl</td>
        <td>≤1200px响偏移应</td>
        <td>Number</td>
        <td>1~24</td>
        <td>-</td>
      </tr>
      <tr space-mode="between">
        <td>relativeToScreen</td>
        <td>始终相对屏幕计算列宽</td>
        <td>Boolean</td>
        <td>false/true</td>
        <td>false</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$emit("test", "girade");
  },
  name: "grid-demo",
  data() {
    return {
      code1: `
<m-row class="girde-item" v-for="n in 4" :key="n">
    <m-col :col="n * 4"><m-cube class="girde-cube">{{ n * 4 }}</m-cube></m-col>
    <m-col :col="24 - n * 2">
        <m-cube class="girde-cube" dark> {{ 24 - n * 4 }} </m-cube>
    </m-col>
</m-row>

<style>
.girde-item {
margin-bottom: 8px;
}
.girde-cube {
height: 36px;
width: 100%;
}
</style>
`,

      code2: `
<m-col :col="4" :offset="n * 2">
    <m-cube class="girde-cube">{{ n * 4 }}</m-cube>
</m-col>`,
      code3: `
<m-row class="row girde-item" :Y="y" :X="x">
    <m-col :col="4"><m-cube class="girde-cube"/></m-col>
    <m-col :col="4"><m-cube class="girde-cube" style="height:48px"/></m-col>
    <m-col :col="4"><m-cube class="girde-cube" style="height:72px"/></m-col>
</m-row>`,
      v1: true,
      x: "start",
      y: "top",
      position: ["start", "center", "end", "around", "between"]
    };
  }
};
</script>

<style>
tr td:nth-child(2) {
  width: 200px;
}
.row.girde-item {
  background: rgb(235, 235, 235);
  border-radius: var(--m-radius);
  height: 100px;
}
.girde-item {
  margin-bottom: 8px;
}
.girde-cube {
  height: 36px;
  width: 100%;
}
</style>
