<script setup>
import componentDemo from './DemoCheckbox.vue'
import demoCheckboxControl from './DemoCheckboxControl.vue'
</script>

# 复选按钮

复选按钮

## 示例

<demo-checkbox-control v-slot='props'>
  <preview-demo-code comp-name="Checkbox" demo-name="DemoCheckbox">
    <component-demo v-bind='props' />
  </preview-demo-code>
</demo-checkbox-control>

## Props

- `name`

  type:`String`

  将此属性设置为`input`元素的`name`属性名称一致，组件将切换到全选模式，组件将能够控制其他的`checkbox`的状态。
