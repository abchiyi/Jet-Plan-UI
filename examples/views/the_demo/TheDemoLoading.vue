<template>
    <div id="the-demo-loading">
        <doc-item id="describes" name="Loading:" tag="h1" no-dot no-padding>
            <p>用于展示加载进度</p>
            <hr />
        </doc-item>

        <doc-item name="示例:" tag="h2">
            <j-control-bar for-id="demo-progress-to-succuss">
                <template v-slot:text>百分比</template>
                <j-slider v-model="value" :max="100" />
            </j-control-bar>
            <j-control-bar for-id="demo-progress-to-failed">
                <template v-slot:text>失败进度条</template>
                <j-switch id="demo-progress-to-failed" v-model="failed" />
            </j-control-bar>
            <j-control-bar for-id="demo-progress-to-pause">
                <template v-slot:text> 暂停 </template>
                <j-switch id="demo-progress-to-pause" v-model="pause" />
            </j-control-bar>

            <demo-box title="Progress">
                <div id="demo-content">
                    <p>常规:</p>
                    <j-progress
                        :failed="failed"
                        :value="value"
                        :pause="pause"
                    />
                    <p>环形:</p>
                    <p>
                        Font size - 16px
                        <j-progress
                            :failed="failed"
                            :value="value"
                            :pause="pause"
                            ring
                        />
                    </p>
                    <p style="font-size: 24px">
                        Font size 24px
                        <j-progress
                            :failed="failed"
                            :value="value"
                            :pause="pause"
                            ring
                        />
                    </p>
                    <p style="font-size: 32px">
                        Font size 32px
                        <j-progress
                            :failed="failed"
                            :value="value"
                            :pause="pause"
                            ring
                        />
                    </p>
                    <p>按钮内部的：</p>
                    <j-button
                        @click="success = !success"
                        style="background: var(--white)"
                    >
                        <j-progress
                            style="font-size: 20px"
                            :failed="failed"
                            :value="value"
                            :pause="pause"
                            ring
                        />
                        <span style="margin-left: 10px"> {{ +value }}% </span>
                    </j-button>
                </div>
            </demo-box>

            <demo-box
                title="Js"
                code="
export default {
    data(){
        return {
            number: 50;
            filed: false;
            pause: false;
        }
    }
}
"
            />

            <demo-box
                title="Html"
                code='
<!-- 条形进度条 -->
<j-progress :failed="failed" :value="number" :pause="pause"/>

<!-- 环形进度条 -->
<j-progress
    :failed="failed"
    :value="number"
    :pause="pause"
    ring
/>

<!--  在按钮内部的 -->
<j-button>
    <j-progress
        ring
        :failed="failed"
        :value="number"
        :pause="pause"
    />
    {{ number }} %
</j-button>
'
            />
        </doc-item>
        <component-documentation v-bind="componentDoc" />
    </div>
</template>

<script>
import { Loading } from '@ui';
import pdn from '../../common/mix/popDemoName';
export default {
    mixins: [pdn],
    name: 'the-demo-progress',
    data() {
        return {
            componentDoc: {
                component: Loading,
                description: {
                    props: {
                        value: '说明：进度条百分比。',
                        failed: '说明：更改样式状态为‘失败/错误’。',
                        pause: '说明：更改样式状态为‘暂停’。',
                        ring: '说明：显示为环形进度条。',
                    },
                },
            },
            intervalID: null,
            success: false,
            failed: false,
            pause: false,
            value: 50,
        };
    },
    watch: {
        success() {
            if (this.success) {
                this.intervalID = setInterval(() => {
                    this.value++;
                }, 99);
            } else {
                this.value = 50;
                clearInterval(this.intervalID);
            }
        },
        value() {
            if (this.value >= 100) {
                clearInterval(this.intervalID);
            }
        },
    },
};
</script>
