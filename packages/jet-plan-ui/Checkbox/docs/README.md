<script setup>
import componentDemo from './DemoCheckbox.vue'
import demoCheckboxControl from './DemoCheckboxControl.vue'
import demoCheckAll from './DemoCheckAll.vue'
import demoCheckAllControl from './DemoCheckAllControl.vue'
</script>

# 复选按钮

复选按钮

## 基础示例

<demo-checkbox-control v-slot='props'>
  <preview-demo-code comp-name="Checkbox" demo-name="DemoCheckbox">
    <component-demo v-bind='props' />
  </preview-demo-code>
</demo-checkbox-control>

`checkbox` 组件仅更改原生元素的外观，你可以通过设置 `font-size` css 属性来修改其的尺寸。组件会时刻监控内部包裹的 `input` 元素的状态，当元素被禁用时组件也会呈现为相应的样式。

## 使用全选功能

通过设置组件的 `name` 属性将组件切换至全选模式将能够控制其他 `name` 属性相同的`input[type='checkbox']` 元素。

<preview-demo-code comp-name="Checkbox" demo-name="DemoCheckAll">
  <demo-check-all/>
</preview-demo-code>

## Props

- `name`

  type:`String`

  将此属性设置为`input`元素的`name`属性名称一致，组件将切换到全选模式，组件将能够控制其他的`checkbox`的状态。
