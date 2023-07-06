<script setup>
import componentDemo from './DemoRadio.vue'
import demoRadioControl   from './DemoRadioControl.vue'
</script>

# 单选按钮

单选按钮

## 示例

`Radio` 仅修改原生`input`元素外观，通过调整 `font-size` 的大小即可调整组件尺寸。

<demo-radio-control v-slot="props">
  <preview-demo-code comp-name="Radio" demo-name="DemoRadio">
    <component-demo v-bind="props"  />
  </preview-demo-code>
</demo-radio-control>
