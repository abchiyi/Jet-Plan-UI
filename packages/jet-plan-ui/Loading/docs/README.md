<script setup>
import componentDemo from './DemoLoading.vue'
import componentDemoControl from './DemoLoadingControl.vue'
</script>

# 进度条

展示加载进度或表示加载状态

## 示例

<component-demo-control v-slot="props" >
  <preview-demo-code comp-name="Loading" demo-name="DemoLoading">
    <component-demo v-bind="props" />
  </preview-demo-code>
</component-demo-control>

## Props

- `mode`

  type: "bar" | "circle"

  default: "bar"

  选择组件呈现模式

- `value`

  type: `Number`

  必要参数，接受一个 0~1 的浮点数值以控制进度条状态

- `diameter`

  type: `number`

  default: 100

  仅在 `mode='circle'` 下生效，控制圆环的直径

- `lineWidth`

  type: `number`

  default: 15

  控制进度条的宽度

- `loading`

  type:`Boolean`

  default: `false`

  启用加载动画，此时进条将不展示百分比状态
