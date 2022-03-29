<template>
  <article id="demo-shadow-painter">
    <h2>ShadowPainter</h2>
    <p>输出一个和 UI 界面统一样式的 css 阴影配置字符串</p>
    <doc-item no-dot name="参数">
      <li>
        <p>
          <high-lighter>direction:String</high-lighter>
          top | bottom | left | right。 设置阴影的方向
        </p>
      </li>
      <li>
        <p>
          <high-lighter>intensity:Number</high-lighter>
          大于0的任意数字。设置阴影的强度
        </p>
      </li>
      <li>
        <p>
          <high-lighter>color:String</high-lighter>
          任意 css 支持的色彩编码。设置阴影色彩，不指定则使用默认阴影色彩
        </p>
      </li>
    </doc-item>

    <demo-box title="shadowPainter" :code="code" expand>
      <j-row X="center">
        <j-cube class="demo-box" v-shadow:bottom="value">
          Intensity:{{ value }}
        </j-cube>
      </j-row>
    </demo-box>
  </article>
</template>
<script>
export default {
  name: 'demo-shadow-painter',
  data: () => {
    return {
      value: 15,
      code: `import { shadowPainter } from 'mousseUI/tool'
// 渲染一个组件
export default {
    render(){
        return h('div',
            {
            style: {
                boxShadow: shadowPainter('buttom', 15)
            }
        })
    }
}
      `,
    };
  },
};
</script>
<style>
.demo-box {
  background: var(--foreground) !important;
  color: var(--text) !important;
  height: 200px;
  width: 150px;
  border: unset;
}
</style>
