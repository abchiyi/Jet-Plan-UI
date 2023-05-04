<script setup>
import componentDemo from './DemoTrackBar.vue'
import disabledTrackBar from './disabledTrackBar.vue'
</script>

# 追踪条

展示进度或输入一个范围内的值，点击或在组件上拖动将会根据光标位置输出一个 0~1 之间的值

## 示例

<disabled-track-bar v-slot="props">
  <preview-demo-code comp-name="TrackBar" demo-name="DemoTrackBar">
    <component-demo v-bind="props" />
  </preview-demo-code>
</disabled-track-bar>

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
