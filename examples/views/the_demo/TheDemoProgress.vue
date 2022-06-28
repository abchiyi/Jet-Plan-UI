<template>
    <div id="the-demo-progressbar">
        <!-- header -->
        <doc-item
            id="describes"
            name="<j-progress>:"
            title-is="h1"
            no-dot
            no-padding
        >
            <li><p>用于展示加载进度</p></li>
        </doc-item>
        <hr />

        <!-- Api -->
        <doc-item name="Props:" title-is="h2">
            <li id="prop-value">
                <p>
                    <high-lighter>value</high-lighter>
                    :type - String|Number, default - 0, range - 0 ~ 100
                </p>
                <p>控制进度条百分比</p>
            </li>
            <li id="prop-failed">
                <p>
                    <high-lighter>failed</high-lighter>
                    : type - Boolean, default - false
                </p>
                <p>切换进度条为失败状态</p>
            </li>
            <li id="prop-height">
                <p>
                    <high-lighter>height</high-lighter>
                    : type - String, default - "8px"
                </p>
                <p>控制状态栏行高</p>
            </li>
            <li>
                <p>
                    <high-lighter>pause</high-lighter>: : type - Boolean,
                    default - failed
                </p>
                <p>切换样式到暂停状态</p>
            </li>
            <li>
                <p>
                    <high-lighter>ring</high-lighter>: type - Boolean, default -
                    false
                </p>
                <p>切换样式到环形进度条</p>
            </li>
        </doc-item>

        <h2>示例:</h2>
        <hr />
        <!-- control -->
        <div>
            <j-control-bar for-id="demo-progress-to-succuss">
                <template v-slot:text>完成进度条</template>
                <j-switch id="demo-progress-to-succuss" v-model="success" />
            </j-control-bar>
            <j-control-bar for-id="demo-progress-to-failed">
                <template v-slot:text>失败进度条</template>
                <j-switch id="demo-progress-to-failed" v-model="failed" />
            </j-control-bar>
            <j-control-bar for-id="demo-progress-to-pause">
                <template v-slot:text> 暂停 </template>
                <j-switch id="demo-progress-to-pause" v-model="pause" />
            </j-control-bar>
        </div>

        <!-- demo -->
        <demo-box title="<j-progress>" :code="code" :expand="true">
            <div id="demo-content">
                <p>常规:</p>
                <j-progress :failed="failed" :value="number" :pause="pause" />
                <p>环形:</p>
                <p>
                    Font size - 16px
                    <j-progress
                        :failed="failed"
                        :value="number"
                        :pause="pause"
                        ring
                    />
                </p>
                <p style="font-size: 24px">
                    Font size 24px
                    <j-progress
                        :failed="failed"
                        :value="number"
                        :pause="pause"
                        ring
                    />
                </p>
                <p style="font-size: 32px">
                    Font size 32px
                    <j-progress
                        :failed="failed"
                        :value="number"
                        :pause="pause"
                        ring
                    />
                </p>
                <p>环形 in Button:</p>
                <j-button
                    @click="success = !success"
                    style="background: var(--foreground)"
                >
                    <j-progress
                        style="font-size: 20px"
                        :failed="failed"
                        :value="number"
                        :pause="pause"
                        ring
                    />
                    <span style="margin-left: 10px"> {{ +number }}% </span>
                </j-button>
            </div>
        </demo-box>
    </div>
</template>

<script>
import pdn from '../../common/mix/popDemoName';
export default {
    mixins: [pdn],
    name: 'the-demo-progress',
    data() {
        return {
            code: `
//javascript
let number = 50;
let filed = false;
let pause = false;

// HTML
<j-control-bar for-id="demo-progress-to-succuss">
    <template v-slot:text>完成进度条</template>
        <j-switch
            id="demo-progress-to-succuss"
            v-model="success"
        />
</j-control-bar>
<j-control-bar for-id="demo-progress-to-failed">
    <template v-slot:text>失败进度条</template>
        <j-switch
            id="demo-progress-to-failed"
            v-model="failed"
        />
</j-control-bar>
<j-progress
    :failed="failed"
    :value="number"
></j-progress>

<!-- type ring -->
<j-progress
    :failed="failed"
    :value="number"
    :pause="pause"
    ring
></j-progress>

<!--  type ring -->
<j-button
    @click="success = !success"
    style="background: var(--foreground)"
>
    <j-progress
        ring
        :failed="failed"
        :value="number"
        :pause="pause"
    ></j-progress>
    {{ number }} %
</j-button>
                `,
            intervalID: null,
            success: false,
            failed: false,
            pause: false,
            number: 50,
        };
    },
    watch: {
        success() {
            if (this.success) {
                this.intervalID = setInterval(() => {
                    this.number++;
                }, 99);
            } else {
                this.number = 50;
                clearInterval(this.intervalID);
            }
        },
        number() {
            if (this.number >= 100) {
                clearInterval(this.intervalID);
            }
        },
    },
};
</script>
