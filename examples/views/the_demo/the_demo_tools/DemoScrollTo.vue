<template>
  <article id="demo-scroll-to">
    <h2>scrollTo</h2>
    <br />
    <p>
      使用过渡动画滚动到指定元素。目标元素高度小于视窗高度时，滚动至其会居中至窗口中央，超出视窗高度则滚动至
      “toTop” 定义的高度
    </p>
    <doc-item class="no-dot" name="参数">
      <li>
        <high-lighter>elID:String</high-lighter>
        目标元素 id
      </li>
      <li>
        <p>
          <high-lighter>toTop:Number</high-lighter>
          滚动至距离多少像素
        </p>
      </li>
    </doc-item>
    <doc-item class="no-dot" name="使用">
      <li>
        <j-code-box :code="code" />
      </li>
    </doc-item>
  </article>
</template>
<script>
export default {
  name: 'the-tool-lib-dom',
  data: () => {
    return {
      code: `import { scrollTo } from 'mousseUI/tool';
scrollTo('#id1',100)`,
    };
  },
};
</script>
