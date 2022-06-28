<template>
    <div>
        <h1>动作反馈组件</h1>
        <p>用于动作交互视觉反馈</p>
        <hr />

        <!-- DOC -->
        <doc-item name="Props:" title-is="h2">
            <li id="prop-opacity">
                <p>
                    <high-lighter>opacity</high-lighter>
                    : type - String, default - "0.5"
                </p>
                <p>用于设置遮罩不透明度</p>
            </li>
            <li id="prop-tag">
                <p>
                    <high-lighter>tag</high-lighter>
                    : type - String, default - "div"
                </p>
                <p>设置组件渲染标签</p>
            </li>
            <li id="prop-active">
                <p>
                    <high-lighter>active</high-lighter>
                    : type - Boolean, default - false
                </p>
                <p>开启/关闭 "active" 效果</p>
            </li>
            <li id="prop-hover">
                <p>
                    <high-lighter>hover</high-lighter>
                    : type - Boolean, default - false
                </p>
                <p>开启/关闭 "hover" 效果</p>
            </li>
            <li id="prop-focus">
                <p>
                    <high-lighter>focus</high-lighter>
                    : type - Boolean, default - false
                </p>
                <p>点击元素是呈现聚焦样式</p>
            </li>
            <li id="prop-name">
                <p>
                    <high-lighter>name</high-lighter>
                    : type - String, default - 'j'
                </p>
                <p>自定义样式类名</p>
            </li>
        </doc-item>
        <doc-item name="Slots:" title-is="h2">
            <li>
                <high-lighter>default</high-lighter>
                : 组件仅有一个默认插槽
            </li>
        </doc-item>

        <!-- Control -->
        <div id="controls-group">
            <p>自定义色彩:</p>
            <div id="controls-color">
                <j-card>
                    <j-action-feedback
                        class="color-group"
                        tag="label"
                        v-for="item in customColors"
                        @click="changCustomColor(item.colors)"
                        :key="item.name"
                        active
                        hover
                    >
                        <j-radio
                            :id="'radio-' + item.name"
                            v-model="customColorsActive"
                            :value="item.colors"
                        />
                        <span class="text-hint">{{ item.name }}:</span>
                        <j-row>
                            <j-cube
                                class="text-hint"
                                :style="{
                                    backgroundColor: item.colors.colorActive,
                                }"
                                v-auto-color
                                >active</j-cube
                            >
                            <j-cube
                                class="text-hint"
                                :style="{
                                    backgroundColor: item.colors.colorHover,
                                }"
                                v-auto-color
                                >Hover</j-cube
                            >
                            <j-cube
                                class="text-hint"
                                :style="{
                                    backgroundColor: item.colors.colorFocus,
                                }"
                                v-auto-color
                                >Focus</j-cube
                            >
                        </j-row>
                    </j-action-feedback>
                    <j-button
                        row
                        id="clear-custom-color"
                        @click="customColorsActive = {}"
                        >清除自定义色彩</j-button
                    >
                </j-card>
            </div>
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
                        :focus-outline="focusOutline"
                        v-bind="customColorsActive"
                    >
                        <j-row style="height: 100%" warp X="center" Y="center">
                            <span> ClickMe!! </span>
                            <j-switch id="test-switch-1" v-model="v"></j-switch>
                        </j-row>
                    </j-action-feedback>
                </j-row>
            </div>
        </demo-box>
        <h2>自定义色彩:</h2>
        <p>组件支持定义各种动作的色彩</p>
        <hr />
        <demo-box
            title="自定义色彩"
            code='
<!-- HTML -->
<j-action-feedback
    active
    hover
    focus

    colorActive: "#a3b3d4",
    colorFocus: "#e3ecff",
    colorHover: "#bfd2f8",
>
    <j-row style="height: 100%" warp X="center" Y="center">
        <span> ClickMe!! </span>
        <j-switch id="test-switch-1" v-model="v"></j-switch>
    </j-row>
</j-action-feedback>
            '
        ></demo-box>
        <doc-item name="自定义样式:" title-is="h2" no-dot no-padding>
            <hr />
            <li>
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
            </li>
        </doc-item>
    </div>
</template>

<script>
import pdn from '../../common/mix/popDemoName';
import WarningText from '../../common/Warning-text.vue';
export default {
    components: { WarningText },
    mixins: [pdn],
    name: 'the-demo-action-feedbacks',
    data() {
        return {
            v: true,
            active: true,
            hover: true,
            focus: false,
            focusOutline: false,
            customColors: [
                {
                    name: '配色组1',
                    colors: {
                        colorActive: '#a3b3d4',
                        colorFocus: '#e3ecff',
                        colorHover: '#bfd2f8',
                    },
                },
                {
                    name: '配色组2',
                    colors: {
                        colorActive: '#871f1f',
                        colorFocus: '#ffe2e2',
                        colorHover: '#ed9797',
                    },
                },
            ],
            customColorsActive: {},
            code: `
//Javascript
let active = true,
let hover = true,
let focus = true,
let focusOutline = true,
// HTML
<!-- Control -->
<j-control-bar for-id="re-active">
    <template v-slot:text>启用 Active 效果</template>

        <j-switch id="re-active" v-model="active" />
    </template>
</j-control-bar>
<j-control-bar for-id="re-hover">
    <template v-slot:text>启用 Hover 效果</template>

        <j-switch id="re-hover" v-model="hover" />
    </template>
</j-control-bar>
<j-control-bar for-id="switch-focus">
    <template v-slot:text>启用 :focus 效果</template>

        <j-switch id="switch-focus" v-model="focus" />
    </template>
</j-control-bar>
<!-- Demo -->
<j-row X="center">
    <j-action-feedback
        tabindex="1"
        class="demo-item"
        :active="active"
        :hover="hover"
        :focus="focus"
    >
        <j-row
            style="height: 100%"
            X="center"
            Y="center"
        >
            ClickMe!!
        </j-row>
    </j-action-feedback>
    <j-action-feedback
        tabindex="2"
        class="demo-item"
        :active="active"
        :hover="hover"
        :focus="focus"
    >
        <j-row
            style="height: 100%"
            X="center"
            Y="center"
        >
            ClickMe!!
        </j-row>
    </j-action-feedback>
</j-row>
                `,
        };
    },
    methods: {
        changCustomColor(colors) {
            this.customColorsActive = colors;
        },
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
