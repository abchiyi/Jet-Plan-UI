<script setup>
import componentDemo from './DemoBubble.vue'
import positionSelector from './positionSelector.vue'
</script>

# 浮动气泡

浮动消息气泡

## 示例

<position-selector v-slot='prop'>
  <preview-demo-code comp-name="Bubble" demo-name="DemoBubble">
    <component-demo v-bind='prop' />
  </preview-demo-code>
 </position-selector>

## Props

- `position`:

  type：`String`

  default：`'top'`

  range:`'top'|'top-end'|'top-start'|'bottom'|'bottom-end'|'bottom-start'|
'left'|'left-top'|'left-bottom'|'right'|'right-top'|'right-bottom'`

  设置气泡显示位置。注意：气泡位置在设置显示的一侧过于接近屏幕边缘时将会避开屏幕边缘显示

- `show`:

  type: `Boolean | String`

  default: `unset`

  控制气泡显示/隐藏。设置该属性时组件将不再响应鼠标事件。

- `customRender`:

  type: `Function (vNode?: VNode) => VNode`

  自定义气泡组件渲染方式，例如用于更改默认的过渡动画。
