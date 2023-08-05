<script setup>
import componentDemo from './DemoTrackBar.vue'
import demoTrackBarControl from './DemoTrackBarControl.vue'
</script>

# 追踪条

展示进度或输入一个范围内的值，点击或在组件上拖动将会根据光标位置输出一个 0~1 之间的值

## 示例

<demo-track-bar-control v-slot="props">
  <preview-demo-code comp-name="TrackBar" demo-name="DemoTrackBar">
    <component-demo v-bind="props" />
  </preview-demo-code>
</demo-track-bar-control>

## Props

- `disabled`:

  type:`Boolean`

  default:`false`

  禁用组件

- `displayOnly`:

  type:`Boolean`

  default:`false`

  组件将不响应任何输入

- `percentage`:

  type:`Number`

  required: `true`

  百分比值 0~1

## Events

- `trackStart`:

  在`onmousedown`&`ontouchstart`时触发，无携带值。

- `trackMove`:

  在`onmousemove`&`ontouchmove`时触发，无携带值。

- `trackEnd`:

  在`onmouseup`,`ontouchcancel`,`ontouchend`时触发，无携带值。

- `update:percentage`:

  在操作组件时触发，携带改变后的`percentage`的值。

## Slots

- default：内容将插入到组件表面

- slider：内容将入到滑动条中

- background：内容将插入到背景中
