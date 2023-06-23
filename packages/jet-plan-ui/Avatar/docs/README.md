<script setup>
import componentDemo from './DemoAvatar.vue'
import demoAvatarControl from './DemoAvatarControl.vue'
</script>

# 头像

用于展示头像，或图标

## 示例

<demo-avatar-control  v-slot="props" >
  <preview-demo-code comp-name="Avatar" demo-name="DemoAvatar">
    <component-demo v-bind="props" />
  </preview-demo-code>
</demo-avatar-control>

## Props

- `circle`:

  type:Boolean

  default: true

  设置组件为圆形，否者将设置为圆角矩形。

## Slots

- `default`:

  默认插槽，要展示的内容插入其中。

## 特性

Avatar 组件具有文本色彩自适应功能，能根据当前组件背景色自动突出文本色彩。
