<script setup>
import componentDemo from './DemoDrawer.vue'
import DemoControl from './DemoControl.vue'
</script>

# 抽屉组件

在屏幕边缘折叠内容

## 示例

抽屉组件默认与属性`from`中设置的屏幕边缘等宽，但其内部高度需要由内部元素撑开或使
用css进行设置。例如示例中被放置在抽屉中的方块，它的高度设置始终生效于折叠屏幕边
缘的垂线方向。

<preview-demo-code comp-name="Drawer" demo-name="DemoDrawer">
  <demo-control v-slot="props">
    <component-demo v-bind="props" />
  </demo-control>
</preview-demo-code>

## Props

- `expand`:

  type:`Boolean`

  这个参数是必须的,它控制抽屉是否展开。

- `from`:

  type:`String`

  range:`"top" | "left" | "right" | "bottom"`

  这个参数是必须的,它控制抽屉在屏幕的什么位置展开。

## Slots

- `default`:

  默认插槽，将要折叠的内容放在这里。
