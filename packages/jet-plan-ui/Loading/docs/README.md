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
