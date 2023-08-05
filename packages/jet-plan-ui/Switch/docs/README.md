<script setup>
import componentDemo from './DemoSwitch.vue'
import demoSwitchControl from './DemoSwitchControl.vue'
</script>

# Switch

组件依赖 `input` 元素实现功能，仅修改原生元素的样式。

## 示例

<demo-switch-control v-slot="props" >
  <preview-demo-code comp-name="Switch" demo-name="DemoSwitch">
    <component-demo v-bind="props" />
  </preview-demo-code>
</demo-switch-control>
