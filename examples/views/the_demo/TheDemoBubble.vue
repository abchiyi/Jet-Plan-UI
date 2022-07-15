<template>
    <div id="the-demo-bubble">
        <h1>Bubble</h1>
        <p>悬浮显示简短提示</p>
        <hr />

        <doc-item name="示例：" tag="h2">
            <p class="text-hint">选择气泡悬浮位置</p>
            <j-card>
                <j-row spaceMode="between" class="text-hint group top">
                    <label class="radio-bubble-position" for="top">
                        <j-radio v-model="position" id="top" value="top" />
                        <p>top</p>
                    </label>
                    <label class="radio-bubble-position" for="top-start">
                        <j-radio
                            v-model="position"
                            id="top-start"
                            value="top-start"
                        />
                        <p>top-start</p>
                    </label>
                    <label class="radio-bubble-position" for="top-end">
                        <j-radio
                            v-model="position"
                            id="top-end"
                            value="top-end"
                        />
                        <p>top-end</p>
                    </label>
                </j-row>
                <j-row spaceMode="between" class="text-hint group bottom">
                    <label class="radio-bubble-position" for="bottom">
                        <j-radio
                            v-model="position"
                            id="bottom"
                            value="bottom"
                        />
                        <p>bottom</p>
                    </label>
                    <label class="radio-bubble-position" for="bottom-start">
                        <j-radio
                            v-model="position"
                            id="bottom-start"
                            value="bottom-start"
                        />
                        <p>bottom-start</p>
                    </label>
                    <label class="radio-bubble-position" for="bottom-end">
                        <j-radio
                            v-model="position"
                            id="bottom-end"
                            value="bottom-end"
                        />
                        <p>bottom-end</p>
                    </label>
                </j-row>
                <j-row spaceMode="between" class="text-hint group left">
                    <label class="radio-bubble-position" for="left">
                        <j-radio v-model="position" id="left" value="left" />
                        <p>left</p>
                    </label>
                    <label class="radio-bubble-position" for="left-top">
                        <j-radio
                            v-model="position"
                            id="left-top"
                            value="left-top"
                        />
                        <p>left-top</p>
                    </label>
                    <label class="radio-bubble-position" for="left-bottom">
                        <j-radio
                            v-model="position"
                            id="left-bottom"
                            value="left-bottom"
                        />
                        <p>left-bottom</p>
                    </label>
                </j-row>
                <j-row spaceMode="between" class="text-hint group right">
                    <label class="radio-bubble-position" for="right">
                        <j-radio v-model="position" id="right" value="right" />
                        <p>right</p>
                    </label>
                    <label class="radio-bubble-position" for="right-top">
                        <j-radio
                            v-model="position"
                            id="right-top"
                            value="right-top"
                        />
                        <p>right-top</p>
                    </label>
                    <label class="radio-bubble-position" for="right-bottom">
                        <j-radio
                            v-model="position"
                            id="right-bottom"
                            value="right-bottom"
                        />
                        <p>right-bottom</p>
                    </label>
                </j-row>
            </j-card>
            <p class="text-hint">请将鼠标悬浮于元素上方并保持</p>

            <demo-box
                title="<j-Bubble>"
                expand
                code='
<j-bubble message="Hello this is text" :position="position">
    <p>Bubble Test</p>
</j-bubble>
        '
            >
                <j-row spaceMode="between" Y="center">
                    <j-bubble
                        message="Hello this is Button"
                        :position="position"
                    >
                        <j-button>Bubble Test</j-button>
                    </j-bubble>

                    <j-bubble message="Hello this is cube" :position="position">
                        <j-cube />
                    </j-bubble>

                    <j-bubble message="Hello this is text" :position="position">
                        <p>Bubble Test</p>
                    </j-bubble>
                </j-row>
            </demo-box>
        </doc-item>

        <component-documentation v-bind="componentDoc" />

        <h2>Props:</h2>
        <hr />
        <doc-item name="message:">
            <li>type: {String}</li>
            <li>
                <p>required</p>
                <p>提示信息内容</p>
            </li>
        </doc-item>
        <doc-item name="position:">
            <li>type:{String}</li>
            <li>required</li>
            <li>
                range:
                <p>top | top-end |top-start</p>
                <p>bottom | bottom-end | bottom-start</p>
                <p>left' | left-top | left-bottom</p>
                <p>right | right-top | right-bottom</p>
                <p>用于设置悬浮位置</p>
            </li>
        </doc-item>

        <doc-item name="Slots:" tag="h2">
            <template v-slot:title>
                <hr />
            </template>
            <li>
                <p>仅有默认插槽</p>
            </li>
        </doc-item>

        <h2>其他功能：</h2>
        <hr />
        <ul>
            <li>
                <p>
                    Bubble
                    组件能的弹出式气泡提示框能在元素保持在屏幕中的情况下自动避开屏幕边缘
                </p>
            </li>
        </ul>
    </div>
</template>

<script>
import { Bubble } from '@ui';
export default {
    name: 'the-demo-bubble',
    data() {
        return {
            position: 'top',
            componentDoc: {
                component: Bubble,
                description: {
                    props: {
                        message: '说明：要显示的信息。',
                        position: '说明：气泡默认浮出位置。',
                        show: '说明：控制气泡浮出。不依赖鼠标/触摸事件触发。',
                    },
                },
            },
        };
    },
};
</script>

<style>
.set-bubble-position-cube,
.set-bubble-position-cube * {
    font-size: 12px;
}
.set-bubble-position-cube.el {
    width: 210px;
    height: 210px;
    margin: 5px 15px;
}
.set-bubble-position-cube {
    height: 70px;
    width: 70px;
    margin: 5px;
}

.group {
    font-size: 12px;
}

.radio-bubble-position {
    width: 100px;
}
</style>
