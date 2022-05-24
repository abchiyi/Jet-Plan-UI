<template>
    <!-- TODO 页面存在多个条目需要设置页面 index -->
    <div id="the-demo-alert">
        <h1>Alert</h1>
        <p>用于简短的消息通知</p>
        <hr />

        <h2>&lt;j-alert&gt;</h2>
        <h3>Props：</h3>
        <hr>

        <!-- Doc <alert> -->
        <doc-item name="data:">
            <li>
                <p>
                    <high-lighter>data
                    </high-lighter> type - AlertData, required
                </p>
                <p>需要传入
                    <high-lighter>AlertData</high-lighter>对象
                </p>
            </li>
        </doc-item>

        <!-- Doc AlertData -->
        <h2>AlertData()</h2>
        <h3>methods:</h3>
        <hr />
        <doc-item name="info(), error(), warning(), success()">
            <li>
                <p><strong> 参数： </strong></p>
                <ul>
                    <li>
                        <p>{String} Message</p>
                    </li>
                    <li>
                        <p>{Number} Alert timeout</p>
                    </li>
                </ul>
            </li>
            <li>
                <p><strong> 使用：</strong>
                <ul>
                    <li>
                        <p>
                            发出类型为
                            <high-lighter>info</high-lighter>
                            的 alert
                        </p>
                    </li>
                </ul>
                </p>
            </li>
        </doc-item>
        <doc-item name="removeAll()">
            <li>
                <p>参数：无</p>
            </li>
            <li>
                <p>使用：清除所有通知</p>
            </li>
        </doc-item>

        <h2>示例:</h2>
        <hr />
        <demo-box
            title="j-alert"
            :code="`1`"
        >
            <h3>通知类型：</h3>
            <hr />
            <j-row warp>
                <j-control-bar
                    reverse
                    no-background
                    for-id="alert-info"
                >
                    <template v-slot:text>
                        <span> Info </span>
                    </template>
                    <j-radio
                        id="alert-info"
                        value="info"
                        v-model="type"
                    />
                </j-control-bar>

                <j-control-bar
                    reverse
                    no-background
                    for-id="alert-success"
                >
                    <template v-slot:text>
                        <span> Success </span>
                    </template>
                    <j-radio
                        id="alert-success"
                        value="success"
                        v-model="type"
                    />
                </j-control-bar>

                <j-control-bar
                    reverse
                    no-background
                    for-id="alert-error"
                >
                    <template v-slot:text>
                        <span> Error </span>
                    </template>
                    <j-radio
                        id="alert-error"
                        value="error"
                        v-model="type"
                    />
                </j-control-bar>

                <j-control-bar
                    reverse
                    no-background
                    for-id="alert-warning"
                >
                    <template v-slot:text>
                        <span> Warning </span>
                    </template>
                    <j-radio
                        id="alert-warning"
                        value="warning"
                        v-model="type"
                    />
                </j-control-bar>
            </j-row>
            <h3>通知超时:</h3>
            <hr />
            <j-control-bar for-id="use-timeout">
                <template v-slot:text> 使用超时自动关闭 </template>
                <j-switch
                    v-model="useTimeout"
                    id="use-timeout"
                />
            </j-control-bar>
            <j-input
                :disabled="!useTimeout"
                id="alert-timeout-ms"
                v-model="alertTimeout"
            ></j-input>
            <label for="alert-timeout-ms">ms</label>
            <br />
            <br />
            <j-button
                @click="sendAlert"
                row
            >
                <strong> Send alert </strong>
            </j-button>
            <j-button
                @click="$jetAlert.removeAll()"
                row
            >
                <strong> Clear All </strong>
            </j-button>
        </demo-box>
    </div>
</template>

<script>
export default {
    name: 'the-demo-alert',
    data () {
        return {
            type: 'info',
            alertTimeout: 2000,
            useTimeout: false,
        }
    },
    methods: {
        sendAlert () {
            switch (this.type) {
                case 'success':
                    this.$jetAlert.success(
                        `${this.type.toUpperCase()} - Hello Alert`,
                        this.useTimeout ? this.alertTimeout : 0
                    )
                    break
                case 'error':
                    this.$jetAlert.error(
                        `${this.type.toUpperCase()} - Hello Alert`,
                        this.useTimeout ? this.alertTimeout : 0
                    )
                    break
                case 'warning':
                    this.$jetAlert.warning(
                        `${this.type.toUpperCase()} - Hello Alert`,
                        this.useTimeout ? this.alertTimeout : 0
                    )
                    break

                default:
                    this.$jetAlert.info(
                        `${this.type.toUpperCase()} - Hello Alert`,
                        this.useTimeout ? this.alertTimeout : 0
                    )
                    break
            }
            this.$jetAlert
        },
    },
}
</script>

<style>
</style>
