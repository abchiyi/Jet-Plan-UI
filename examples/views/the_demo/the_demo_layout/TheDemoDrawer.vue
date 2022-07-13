<template>
    <article>
        <h1>抽屉组件</h1>
        <p>可从屏幕四个方向展开，用于侧栏，菜单栏以及对话框。</p>
        <p>抽屉组件仅提供基于边框的定位，组件具体位置需手动指定</p>
        <hr />

        <doc-item name="示例：" tag="h2">
            <j-button
                id="expand-button"
                row
                primary
                @click="
                    () => {
                        expand = !expand;
                    }
                "
            >
                {{ expand ? '收起' : '展开' }}抽屉
            </j-button>
            <j-control-bar
                :for-id="`radio-${i}`"
                v-bind:key="i"
                v-for="i in ['top', 'bottom', 'left', 'right']"
            >
                <template v-slot:text>{{ `从${text[i]}展开` }}</template>
                <j-radio :id="`radio-${i}`" v-model="openOn" :value="i" />
            </j-control-bar>
            <j-drawer id="demo-drawer" :from="openOn" :expand="expand">
                <j-cube :class="demoCubeClass">
                    <span style="font-size: 14px"> Test Cube </span>
                </j-cube>
            </j-drawer>
            <demo-box
                title="Html"
                code='
<j-drawer from="right" expand="true">
    <p>Test</p>
</j-drawer>
'
            />
        </doc-item>
        <component-documentation v-bind="componentDoc" />
    </article>
</template>

<script>
import { Drawer } from '@ui';
import popDemoName from '../../../common/mix/popDemoName';
export default {
    name: 'the-demo-drawers',
    mixins: [popDemoName],
    data() {
        return {
            componentDoc: {
                component: Drawer,
                description: {
                    props: {
                        expand: '说明：开启/关闭。',
                        from: '说明：从指定位置展开。',
                    },
                },
            },
            openOn: 'right',
            expand: false,
            text: {
                top: '顶部',
                bottom: '底部',
                left: '左侧',
                right: '右侧',
            },
        };
    },
    computed: {
        demoCubeClass() {
            return ['demo-cube', 'on-' + this.openOn];
        },
    },
};
</script>

<style>
#expand-button {
    font-size: 1.2rem;
}
#demo-drawer {
    z-index: 99;
}

.demo-cube.on-top,
.demo-cube.on-bottom {
    width: 100%;
}
.demo-cube.on-left,
.demo-cube.on-right {
    height: 100%;
}
</style>
