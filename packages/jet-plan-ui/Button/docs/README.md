<script setup>
import DemoButton from './DemoButton.vue'
import DemoButtonText from './DemoButtonText.vue'
</script>

# 按钮

按钮组件

## 示例

- ### Button

  <preview-demo-code comp-name="Button" demo-name="DemoButton">
    <DemoButton />
  </preview-demo-code>

- ### 文本按钮

  <preview-demo-code comp-name="Button" demo-name="DemoButtonText">
    <demo-button-text />
  </preview-demo-code>

## Props

- `disabled`:

  type:`Boolean`

  default:`false`

  禁用按钮

- `text`:

  type:`Boolean`

  default:`false`

  文本按钮

- `primary`:

  type:`Boolean`

  default:`false`

  主要按钮

- `block`:

  type:`Boolean`

  default:`false`

  块级按钮
