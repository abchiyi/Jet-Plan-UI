<template>
    <div>
        <h2>Code box</h2>
        <p>用于展示各种代码</p>
        <!-- Demo -->
        <demo-box title="点击反馈" :code="code" expand>
            <div>
                <p>默认状态</p>
                <j-code-box code="console.log('Hello world')" />
                <p>启用 can-copy</p>
                <j-code-box can-copy code="console.log('Hello world')" />
                <p>启用 can-copy 和 自定义图标</p>
                <j-code-box
                    can-copy
                    code="
console.log('Hello world');
        "
                >
                    <template v-slot:icon-copy>
                        <i class="bi bi-clipboard"></i>
                    </template>
                </j-code-box>
                <br />
                <p>启用 can-copy 和 自定义图标以及在多行状态下</p>
                <j-code-box can-copy code="console.log('Hello world');">
                    <template v-slot:icon-copy>
                        <i class="bi bi-file-earmark-text"></i>
                    </template>
                </j-code-box>
                <br />
                <j-code-box
                    can-copy
                    code="
console.log('Hello world');
console.log('Hello world');
        "
                >
                    <template v-slot:icon-copy>
                        <i class="bi bi-clipboard"></i>
                    </template>
                </j-code-box>
                <br />
            </div>
        </demo-box>
        <component-documentation v-bind="componentDoc" />
        <doc-item name="Slots:" tag="h2">
            <ul>
                <li>
                    <p><strong>icon-copy:</strong></p>
                    <p>自定义复制按钮图标,默认为文本 'Copy'</p>
                </li>
            </ul>
        </doc-item>
    </div>
</template>

<script>
import pdn from '../../common/mix/popDemoName';
import { CodeBox } from '@ui';
export default {
    mixins: [pdn],
    name: 'the-demo-code-box',
    data() {
        return {
            componentDoc: {
                component: CodeBox,
                description: {
                    props: {
                        code: '说明：要展示的代码。',
                        lang: '说明：语言类型。',
                        canCopy: '说明：启用复制按钮。',
                        copyMessage: '说明：复制按钮提示气泡内容。',
                    },
                },
            },
            code: `
<p>默认状态</p>
<j-code-box code="console.log('Hello world')" />

<p>启用 can-copy</p>
<j-code-box can-copy code="console.log('Hello world')" />

<p>启用 can-copy 和 自定义图标</p>
<j-code-box can-copy code="console.log('Hello world');">
    <template v-slot:icon-copy>
        <i class="bi bi-clipboard"></i>
    </template>
</j-code-box>
<br />

<p>启用 can-copy 和 自定义图标以及在多行状态下</p>
<j-code-box can-copy code="console.log('Hello world');">
    <template v-slot:icon-copy>
        <i class="bi bi-file-earmark-text"></i>
    </template>
</j-code-box>
<br />

<j-code-box
can-copy
code="
console.log('Hello world');
console.log('Hello world');
">
    <template v-slot:icon-copy>
        <i class="bi bi-clipboard"></i>
    </template>
</j-code-box>
`,
        };
    },
};
</script>

<style scoped>
.j-row > * {
    display: block;
}
</style>
