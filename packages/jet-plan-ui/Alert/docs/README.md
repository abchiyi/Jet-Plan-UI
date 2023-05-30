<script setup>
import DemoAlert from './DemoAlert.vue'
import typeSelector from './typeSelector.vue'
</script>

# 消息提示组件

传递简短的消息通知，当有多条通知时以阻塞式展示消息。

## 示例

<type-selector  v-slot='propSelector' >
  <preview-demo-code comp-name="Alert" demo-name="DemoAlert">
    <demo-alert v-bind='propSelector'/>
  </preview-demo-code>
</type-selector>

## Props

- `alertController`

  type:`new AlertController()`

  接受 `AlertController` 对象作为参数，此选项是必须的

- `transition`

  type:`Function`

  接受返回一个渲染函数的回调函数作为参数

## AlertController

将一个 `AlertController` 对象绑定到组件时，调用其含有的方法可以控制消息如何发出，以及关闭时机。

定义一个控制器

```ts
import { AlertController } from "jet-plan-ui"
const AC = new AlertController()
AC.sendMessage(...) // 发出一条消息
AC.removeAll(...) // 关闭所有消息
```

调用方法 `.sendMessage` 以发送一个新的通知，以下是它的函数定义。

```ts
sendMessage(

  // 定义消息类型
  messageType: "info" | "error" | "warning" | "success",

  // 决定消息展示时间，单位 'ms'，为 0 | null 时将一直展示消息
  timeout: number | null，

  // 消息内容，你可以使用渲染函数来定义更丰富的通知内容
  content:  string | VNode | {
    default: string | VNode; // 消息内容
    closeButton: string | VNode; // 关闭按钮要展示的内容
  }
)
```

调用 `.removeAll` 以关闭所有消息，以下是它的函数定义。

```ts
async removeAll(
  ms?:number //以消息发出顺序依次关闭通知，单位 'ms'，不提供时将直接关闭所有通知。
)
```

## 自定义动画

组件属性`transition`接受一个返回 `VNode`的函数作为参数，以下是它的函数定义

```ts
function customTransition (
  vNode:VNode | undefined // 消息通知组件的VNode
) => VNode
```

示例

```ts
import { Transition } from "vue";
function customTransition(vNode) {
  return h(
    Transition,
    { mode: "out-in", name: "fade" },
    { default: () => vNode }
  );
}
```

**_注意！为 `Transition` 设置`{mode: "out-in"}`是非常重要的，它将能够保证消息以正确的样式展示。_**
