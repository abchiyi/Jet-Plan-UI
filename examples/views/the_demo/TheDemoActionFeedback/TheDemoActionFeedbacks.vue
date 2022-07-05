<template>
    <div>
        <h1>动作反馈组件</h1>
        <p>用于动作交互视觉反馈</p>
        <hr />
        <h2>示例</h2>
        <!-- Control -->
        <div id="controls-group">
            <div id="controls">
                <j-control-bar for-id="re-active">
                    <template v-slot:text>启用 Active 效果</template>

                    <j-switch id="re-active" v-model="active" />
                </j-control-bar>
                <j-control-bar for-id="re-hover">
                    <template v-slot:text>启用 Hover 效果</template>

                    <j-switch id="re-hover" v-model="hover" />
                </j-control-bar>
                <j-control-bar for-id="switch-focus">
                    <template v-slot:text>启用 :focus 效果</template>

                    <j-switch id="switch-focus" v-model="focus" />
                </j-control-bar>
            </div>
        </div>
        <!-- Demo -->
        <demo-box title="j-action-feedback" :code="code">
            <div>
                <j-row X="center">
                    <j-action-feedback
                        class="demo-item"
                        v-for="n in 2"
                        :key="n"
                        :active="active"
                        :hover="hover"
                        :focus="focus"
                    >
                        <j-row style="height: 100%" warp X="center" Y="center">
                            <span> ClickMe </span>
                        </j-row>
                    </j-action-feedback>
                </j-row>
            </div>
        </demo-box>

        <doc-item name="Slots:" tag="h2">
            <hr />
            <ul>
                <li>
                    <p><strong>default:</strong></p>
                    <p>默认插槽</p>
                </li>
            </ul>
        </doc-item>
        <component-documentation
            :component="ActionFeedback"
            :description="description"
        />

        <doc-item name="自定义样式:" tag="h2">
            <hr />
            <p>
                首先你需要设置 prop: name 为你想要设置的值。在这里假设为
                'test'。
            </p>
            <warning-text>
                <p>
                    在设置了
                    <high-lighter>prop:name</high-lighter>
                    后组件默认样式将会失效！
                </p>
            </warning-text>
            <demo-box
                title="Html"
                code='
<j-action-feedback
    name="test"
>
</j-action-feedback>
                '
            />
            <p>然后在这里启用所有效果</p>
            <demo-box
                title="Html"
                code='
<j-action-feedback
    name="test"
    active
    hover
    focus
>
</j-action-feedback>
                '
            />
            <p>设置自定义Css</p>
            <p>css 规则为 '自定义名-action-feedback'</p>
            <demo-box
                title="Css"
                code="
/* 默认状态 */
.test-action-feedback{
    background:#fff;
    height:100px;
    width:100px;
}

/* 在click&touch事件触发时 */
.test-action-feedback.active{
    background:blue;
}

/* 鼠标覆盖&touch事件触发时 */
.test-action-feedback.hover{
    background:green;
}
/* 点击元素聚焦时 */
.test-action-feedback.focus{
    background:pink;
}
                "
            />
        </doc-item>
    </div>
</template>

<script>
import pdn from '../../../common/mix/popDemoName';
import WarningText from '../../../common/Warning-text.vue';
import { ActionFeedback } from '../../../../packages/jet-plan-ui';
import description from './description';
export default {
    components: { WarningText },
    mixins: [pdn],
    name: 'the-demo-action-feedbacks',
    data() {
        return {
            ActionFeedback: ActionFeedback,
            description: description,
            active: true,
            hover: true,
            focus: false,
            code: `
<j-action-feedback active hover focus style='height:100px;width:100px' >
    ClickMe
</j-action-feedback>
                `,
        };
    },
};
</script>

<style scoped>
.demo-item {
    border-radius: var(--m-radius);
    background: var(--foreground);
    box-sizing: border-box;
    color: var(--text);
    height: 100px;
    width: 100px;
    margin: 10px;
}

#controls-color .j-cube {
    font-size: 12px;
    height: 60px;
    margin: 5px;
    width: 60px;
}

#controls-color .j-button {
    text-align: start;
}
#controls-color .color-group {
    border-radius: var(--m-radius);
    display: inline-block;
    text-align: start;
}

#controls-color #clear-custom-color {
    font-size: 1.2em;
    font-weight: bold;
}
</style>
