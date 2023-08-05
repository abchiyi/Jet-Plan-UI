<script setup>
import disabledComponent from './DisabledComponent.vue'
import componentDemo from './DemoRange.vue'
</script>

# 滑动输入组件

滑动输入

## 示例

组件将专注于视觉交互，所有的逻辑将不会经过组件处理，因此你必须在插槽内提供一个 `input`元素。
可以通过设置 `css` 中的 `width` 属性来修改其的长度，修改`font-size` 改变组件大小。

<disabled-component v-slot="props">
  <preview-demo-code comp-name="Range" demo-name="DemoRange">
    <component-demo v-bind="props" />
  </preview-demo-code>
</disabled-component>

## Props

- `showValue`

  type: `Boolean`

  default:`false`

  是否在操作组件时显示当前值
