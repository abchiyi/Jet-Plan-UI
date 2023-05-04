<script setup>
import componentDemo from './componentDemo.vue'
</script>

# 代码框

基于 ‘hljs’实现，使用前请参考[hljs 文档](https://highlightjs.org/usage/)

## 基础用法

<preview-demo-code comp-name="CodeBox" demo-name="componentDemo">
  <component-demo />
</preview-demo-code>

## Props

- `language`

  type:`String`

  设置要高亮的语言类型，具体请参考“hljs”支持的语言类型

- `code`:

  type:`String`

  要展示的代码内容, 当该属性提供了参数时将忽略默认插槽内提供的内容

- `canCopy`:

  type:`Boolean`

  default:`false`

  展示一个复制按钮，点击按钮将会复制展示的代码到剪贴板

## Slots

- `default`:

  默认插槽，插槽内需要使用标签`<pre><code>... </code></pre>`以保证内容显示正确。

- `copyButton`:

  自定义复制按钮展示的内容

## Events

- `copy-success`:

  当复制成功时

- `copy-fail`:

  当复制失败时

## 注册语言类型

由于‘hljs’使用单例实现，在组件内调用的 hljs 对象与注册语言使用的均为同一对象。因此我们可以在其他文件中仅注册需要的语言类型以缩小打包尺寸。

```js
    import hljs from "highlight.js/lib/core";
    hljs.registerLanguage("javascript", javascript);
```
