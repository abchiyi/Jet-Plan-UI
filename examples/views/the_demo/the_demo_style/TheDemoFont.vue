<template>
    <div>
        <h1>字体</h1>
        <p>
            推荐使用
            <j-button
                info
                text
                tag="a"
                href="https://github.com/adobe-fonts/source-han-sans"
            >
                思源黑体 </j-button
            >。思源黑体是由Google和Adobe在2014年7月正式推出的开源字体不仅可以免费商用而且全面支持中文简体。
        </p>
        <hr />
        <p>
            推荐使用字体: sarasa-ui-sc-regular.ttf|sarasa-mono-sc-semibold.ttf
        </p>
        <p class="text-hint">
            在同目录下放置字体
            sarasa-ui-sc-regular.ttf|sarasa-mono-sc-semibold.ttf。字体配置：
        </p>
        <j-code-box
            lang="css"
            :code="`
/* font.css */

@font-face {
    font-family: sarasa ui sc regular;
    src: url('./sarasa-ui-sc-regular.ttf');
    font-weight: normal;
}

@font-face {
    font-family: sarasa mono sc semibold;
    src: url('./sarasa-mono-sc-semibold.ttf');
    font-weight: normal;
}

* {
    font-family: 'sarasa ui sc regular', 'Segoe UI', Tahoma, Geneva, Verdana,
        sans-serif;
}

.monospace *,
.monospace{
    font-family: 'sarasa mono sc semibold', Consolas, 'Courier New', Courier,
        FreeMono, monospace;
}

.text-hint {
    color: var(--text-hint);
    font-weight: 500;
    font-size: 14px;
}
`"
            can-copy
        ></j-code-box>

        <p>Common text 常规文字 - font-family: 'sarasa ui sc regular'</p>

        <p>
            <span class="monospace"> Monospace 等宽文字</span> - font-family:
            'sarasa mono sc semibold'
        </p>
        <p>
            <span class="text-hint"> Hint text 辅助文字 </span>
            添加 class="text-hint"
        </p>
        <p class="h1"><span>H1</span></p>
        <p class="h2"><span>H2</span></p>
        <p class="h3"><span>H3</span></p>
        <p class="h4"><span>H4</span></p>
        <p class="h5"><span>H5</span></p>
        <p class="h6"><span>H6</span></p>
    </div>
</template>

<script>
export default {
    name: 'the-demo-font',
};
</script>

<style>
</style>
