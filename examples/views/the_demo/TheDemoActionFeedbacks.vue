<template>
    <div>
        <doc-item id="describes" name="动作反馈组件" title-is="h1">
            <li>
                <p>
                    使用动作反馈组件以获得和 UI
                    风格统一的动作反馈样式。例如‘点击’，‘悬停’等动作
                </p>
            </li>
        </doc-item>
        <hr />

        <doc-item name="Props:" title-is="h2">
            <li id="prop-color">
                <p>
                    <high-lighter>color</high-lighter>
                    : type - String, default - "var(-mask)"
                </p>
                <p>用于设置遮罩色彩,支持 css 原生色彩格式&css变量</p>
            </li>
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
                <p>元素聚焦( :fcous )效果</p>
            </li>
            <li id="prop-focus">
                <p>
                    <high-lighter>focus-outline</high-lighter>
                    : type - Boolean, default - false
                </p>
                <p>元素聚焦( :fcous, outline )外边框效果</p>
                <p></p>
            </li>
            <li id="props-describes">
                <p>
                    <high-lighter>focus</high-lighter>
                    ,
                    <high-lighter>focus-outline</high-lighter>
                </p>
                <p>
                    <warning-text>
                        组件渲染元素为不可聚焦元素时,使用以上效果需要设置属性
                        <j-button
                            tag="a"
                            text
                            href="https://developer.mozilla.org/zh-CN/docs/Web/HTML/Global_attributes/tabindex"
                        >
                            "tabindex"
                        </j-button>
                    </warning-text>
                </p>
                <j-code-box
                    code="
<j-action-feedback tabindex='1' focus focus-outline ></j-action-feedback>
<j-action-feedback tabindex='2' focus focus-outline ></j-action-feedback>
"
                />
            </li>
        </doc-item>
        <doc-item name="Slots:" title-is="h2">
            <li>
                <high-lighter>default</high-lighter>
                : 组件仅有一个默认插槽
            </li>
        </doc-item>
        <doc-item name="自定义色彩:" title-is="h2" no-padding no-dot>
            <li>
                <p>
                    组件支持定义各种动作的色彩，选择下面的配色组再尝试点击示例以查看效果。
                </p>
                <demo-box
                    title="自定义色彩"
                    code='
<!-- HTML -->
<j-action-feedback
    active
    hover
    focus
    focus-outline

    colorFocusOutline: "#50b0ff",
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
            </li>
        </doc-item>
        <h2>示例：</h2>
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
                            <j-cube
                                class="text-hint"
                                :style="{
                                    backgroundColor:
                                        item.colors.colorFocusOutline,
                                }"
                                v-auto-color
                                >Focus<br />Outline</j-cube
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
                <j-control-bar for-id="switch-focus-outline">
                    <template v-slot:text>启用 :focus.outline 效果</template>

                    <j-switch
                        id="switch-focus-outline"
                        v-model="focusOutline"
                    />
                </j-control-bar>
            </div>
        </div>

        <!-- Demo -->
        <demo-box title="<j-action-feedback>" :code="code" expand>
            <div>
                <j-row X="center">
                    <j-action-feedback
                        class="demo-item"
                        v-for="n in 2"
                        :key="n"
                        :tabindex="n"
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
                        colorFocusOutline: '#50b0ff',
                        colorActive: '#a3b3d4',
                        colorFocus: '#e3ecff',
                        colorHover: '#bfd2f8',
                    },
                },
                {
                    name: '配色组2',
                    colors: {
                        colorFocusOutline: '#d33030',
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
<j-control-bar for-id="switch-focus-outline">
    <template v-slot:text>
        启用 :focus.outline 效果
    </template>

        <j-switch
            id="switch-focus-outline"
            v-model="focusOutline"
        />
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
        :focus-outline="focusOutline"
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
        :focus-outline="focusOutline"
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
