<script setup>
import disabledComponent from './DisabledComponent.vue'
import componentDemo from './DemoRange.vue'
</script>

# 滑动输入组件

滑动输入

## 示例

<disabled-component v-slot="props">
  <preview-demo-code comp-name="Range" demo-name="DemoRange">
    <component-demo v-bind="props" />
  </preview-demo-code>
</disabled-component>
