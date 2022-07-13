<template>
    <article id="demo-scroll-to">
        <h2>Function scrollTo</h2>
        <p>
            使用过渡动画滚动到指定元素。目标元素高度小于视窗高度时，滚动至其会居中至窗口中央，超出视窗高度则滚动至
            “toTop” 定义的高度
        </p>
        <hr />

        <doc-item name="参数：" tag="h3">
            <p class="text-hint">scrollTo([ elID, [ toTop ] ])</p>
            <ul>
                <li>
                    <p><strong>elID:</strong></p>
                    目标元素 id
                </li>
                <li>
                    <p><strong>toTop:</strong></p>
                    <p>滚动至距离视窗顶部多少像素</p>
                </li>
            </ul>
        </doc-item>
        <h3>示例：</h3>
        <demo-box
            title="Js"
            code="
import { scrollTo } from 'mousseUI/tool';

// 滚动到对应 id 的元素
scrollTo('#id1',100)
"
        />
    </article>
</template>
<script>
export default {
    name: 'the-tool-lib-dom',
};
</script>
