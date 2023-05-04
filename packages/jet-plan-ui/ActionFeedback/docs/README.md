<script setup>
import DemoActionFeedback from './DemoActionFeedback.vue'
import DemoActionLabel from './DemoActionLabel.vue'
</script>

# 交互反馈组件

交互反馈组件,目前提供了点击，覆盖效果，本意在提供一个清晰明快的视觉交互。

## 基础示例

尝试点击以下示例

<preview-demo-code comp-name="ActionFeedback" demo-name="DemoActionFeedback" >
  <DemoActionFeedback/>
</preview-demo-code>

## 更改渲染标签

组件`ActionFeedback`在通常情况下会渲染为一个`div`标签，通过使用`prop:tag`以更改其渲染的标签类型，以达到不同的功能支持。

例如将其渲染为一个 `label`，使用 `<label>` 的特性来优化 `<input>` 的操作范围

```xml
    <j-action-feedback tag='label'>...</j-action-feedback>
     以上组件渲染结果如下⬇️
    <label>
    ...
    <!----> // active 层
    ::after // hover 层
    </label>
```

**示例**:

<preview-demo-code comp-name="ActionFeedback" demo-name="DemoActionLabel" >
  <DemoActionLabel/>
</preview-demo-code>

## Props

- `action`:

  type：`Boolean`

  default：`false`

  开启点击效果

- `hover`:

  type: `Boolean`

  default: `false`

  开启鼠标、触摸 hover 动画

- `tag`:

  type:`String`

  default:`'div'`

  指定渲染标签

## Slots

- `default`: 默认插槽
