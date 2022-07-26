<template>
    <article id="demo-shadow-painter">
        <h2>ShadowPainter</h2>
        <p>输出一个和 UI 界面统一样式的 css 阴影配置字符串</p>
        <hr />

        <doc-item name="参数">
            <p class="text-hint">
                shadowPrinter( [ direction, intensity, [ color ] ] )
            </p>
            <ul>
                <li>
                    <p><strong>direction:</strong></p>
                    <p>type - String</p>
                    <p>range - top | bottom | left | right。</p>
                    <p>设置阴影的方向</p>
                </li>
                <li>
                    <p><strong>intensity:</strong></p>
                    <p>type - Number</p>
                    <p>设置阴影的强度，建议值 0 ~ 30 的任意数字。</p>
                </li>
                <li>
                    <p><strong>color:</strong></p>
                    <p>type - String</p>
                    <p>
                        任意 css
                        支持的色彩编码/名称。设置阴影色彩，不指定则使用主题所设置阴影色彩
                    </p>
                </li>
            </ul>
        </doc-item>

        <demo-box title="shadowPainter" :code="code">
            <j-row X="center">
                <j-cube class="demo-box" v-shadow:bottom="value">
                    Intensity:{{ value }}
                </j-cube>
            </j-row>
        </demo-box>
    </article>
</template>
<script>
export default {
    name: 'demo-shadow-painter',
    data: () => {
        return {
            value: 15,
            code: `import { shadowPainter } from 'mousseUI/tool'
// 渲染一个组件
export default {
    render(){
        return h('div',
            {
            style: {
                boxShadow: shadowPainter('buttom', 15)
            }
        })
    }
}
      `,
        };
    },
};
</script>
<style>
.demo-box {
    background: var(--white) !important;
    color: var(--text-dark) !important;
    height: 200px;
    width: 150px;
    border: unset;
}
</style>
