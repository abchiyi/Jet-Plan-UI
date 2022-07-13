<template>
    <div id="the-demo-sidebar">
        <h1>侧边栏</h1>
        <p>用于在屏幕两侧展示可折叠内容</p>
        <hr />
        <div @click.stop>
            <j-control-bar for-id="demo-sidebar-switch">
                <template v-slot:text>开启侧栏</template>
                <j-switch id="demo-sidebar-switch" v-model="demoShowSidebar" />
            </j-control-bar>
            <j-control-bar for-id="demo-sideber-display-in-right">
                <template v-slot:text>停靠于右侧</template>
                <j-switch
                    id="demo-sideber-display-in-right"
                    v-model="displayInRight"
                />
            </j-control-bar>
        </div>
        <h2>示例：</h2>
        <demo-box
            title="Html"
            code="
<j-sidebar :expand='true' >
<!-- 定位于右侧 -->
<j-sidebar right :expand='true' >
"
            :expand="true"
        ></demo-box>

        <j-sidebar
            v-focus="close"
            style="width: 320px"
            :right="displayInRight"
            :expand="demoShowSidebar"
        >
            测试内容
        </j-sidebar>
        <component-documentation v-bind="componentDoc" />
        <!-- 阻止击事件冒泡以正常关闭演示侧栏 -->
    </div>
</template>
<script>
import { Sidebar } from '@ui';
export default {
    name: 'the-demo-sidebar',
    data: () => {
        return {
            code: `
//Javascript

// HTML

测试内容
</j-sidebar>`,
            demoShowSidebar: false,
            displayInRight: true,
            componentDoc: {
                component: Sidebar,
                description: {
                    props: {
                        expand: '说明：开启侧边栏。',
                        right: '说明：开启后在右侧。',
                    },
                },
            },
        };
    },

    methods: {
        close() {
            this.demoShowSidebar = false;
        },
    },
};
</script>
<style></style>
