<script setup>
import componentDemo from './Demo{{ compName }}.vue'
import componentDemoControl from './Demo{{ compName }}Control.vue'
</script>

# {{ compZhName }}

{{ compDesc }}

## 示例

<component-demo-control v-slot="props" >
  <preview-demo-code comp-name="{{ compName }}" demo-name="Demo{{ compName }}">
    <component-demo v-bind="props" />
  </preview-demo-code>
</component-demo-control>
