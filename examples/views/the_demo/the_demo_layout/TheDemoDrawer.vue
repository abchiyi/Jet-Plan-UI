<template>
    <article>
        <h1>抽屉组件</h1>
        <p>可从屏幕四个方向展开，用于侧栏，菜单栏以及对话框。</p>
        <p>抽屉组件仅提供基于边框的定位，组件具体位置需手动指定</p>
        <hr />
        <doc-item name="Props:" title-is="h2">
            <li>
                <p>
                    <high-lighter>j-drawer</high-lighter>
                    - type: Boolean, required: true
                </p>
                <p>控制抽屉是否展开</p>
            </li>
            <li>
                <p>
                    <high-lighter>from</high-lighter>
                    - type: String, required: true, range: left|right|top|bottom
                </p>
                <p>控制展开方向</p>
            </li>
        </doc-item>
        <doc-item name="Slots:" title-is="h2">
            <li><high-lighter>default</high-lighter> - 仅有默认插槽</li>
        </doc-item>
        <h2>示例</h2>
        <j-control-bar for-id="expand-switch">
            <template v-slot:text>展开抽屉</template>
            <div>
                <j-button
                    @click="
                        () => {
                            expand = !expand;
                        }
                    "
                    id="expand-switch"
                >
                    {{ expand ? '收起' : '展开' }}
                </j-button>
            </div>
        </j-control-bar>

        <j-control-bar
            :for-id="`radio-${i}`"
            v-bind:key="i"
            v-for="i in ['top', 'bottom', 'left', 'right']"
        >
            <template v-slot:text>{{ `从${text[i]}展开` }}</template>
            <j-radio :id="`radio-${i}`" v-model="openOn" :value="i" />
        </j-control-bar>

        <j-drawer id="demo-drawer" :from="openOn" :expand="expand">
            <j-cube>
                <span style="font-size: 14px"> Test Cube </span>
            </j-cube>
        </j-drawer>
        <demo-box title="j-drawer" :code="code" expand> </demo-box>
    </article>
</template>

<script>
import popDemoName from '../../../common/mix/popDemoName';
export default {
    name: 'the-demo-drawers',
    mixins: [popDemoName],
    data() {
        return {
            openOn: 'right',
            expand: false,
            text: {
                top: '顶部',
                bottom: '底部',
                left: '左侧',
                right: '右侧',
            },
            code: `
// !注意 以下 Code 中 以 'j-' 开头的均为 Jet-UI 组件, 请确保已引入所有已使用的组件。

//JavaScript

let openOn =  'right';
let expand =  false;
let text =  {top: '顶部',bottom: '底部',left: '左侧',right: '右侧',};

// HTML

<!-- 展开控制 -->
<j-control-bar for-id="expand-switch">
    <template v-slot:text>展开抽屉</template>
    <div>
    <j-button
        @click="
        () => {
            expand = !expand;
        }
        "
        id="expand-switch"
    >
        {{ expand ? '收起' : '展开' }}
    </j-button>
    </div>
</j-control-bar>

<!-- 位置选择 -->
<j-control-bar
    :for-id="\`radio-\${i}\`"
    v-bind:key="i"
    v-for="i in ['top', 'bottom', 'left', 'right']"
>
    <template v-slot:text>{{ \`从\${text[i]}展开\` }}</template>
    <j-radio :id="\`radio-\${i}\`" v-model="openOn" :value="i" />
</j-control-bar>

<!-- 抽屉组件 -->
<j-drawer id="demo-drawer" :from="openOn" :expand="expand">
    <m-row spaceMode="between">
    <h1>drawer</h1>
    <h1>drawer</h1>
    </m-row>
</j-drawer>
      `,
        };
    },
};
</script>

<style>
#demo-drawer {
    z-index: 99;
}
</style>
