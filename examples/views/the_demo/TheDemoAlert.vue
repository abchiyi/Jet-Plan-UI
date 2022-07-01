<template>
    <div id="the-demo-alert">
        <h1>Alert</h1>
        <p>用于简短的消息通知</p>
        <hr />
        <!-- Alert Demo -->
        <h2>示例:</h2>
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

        <doc-item
            name="<j-alert>:"
            tag="h2"
            id="doc-j-alert"
        >
            <hr>
            <doc-item
                name="Props:"
                tag="h3"
            >
                <ul>
                    <li>
                        <strong>data:</strong>
                        <p> type - { AlertData }, required
                        </p>
                        <p>传入 { AlertData } 对象用于控制如何发出通知 </p>
                    </li>
                </ul>
            </doc-item>
        </doc-item>

        <doc-item
            name="{AlertData}:"
            tag="h2"
            id="doc-alert-data"
        >
            <hr>
            <doc-item
                name="methods:"
                tag="h3"
            >
                <ul>
                    <li>
                        <doc-item name="info(), error(), warning(), success()">
                            <ul>
                                <li>
                                    <p> 参数：</p>
                                    <ol>
                                        <li>
                                            <p>{String} Message</p>
                                        </li>
                                        <li>
                                            <p>
                                                {Number}/ms 设置通知超时自动关闭
                                            </p>
                                        </li>
                                    </ol>
                                </li>
                                <li>
                                    <p> 使用： 发出方法名对应类型的通知</p>
                                </li>
                            </ul>
                        </doc-item>
                    </li>
                    <li>
                        <doc-item name="removeAll()">
                            <ul>
                                <li>
                                    <p>参数：无</p>
                                </li>
                                <li>
                                    <p>使用：清除所有通知</p>
                                </li>
                            </ul>
                        </doc-item>
                    </li>
                </ul>

            </doc-item>
        </doc-item>

        <doc-item
            name="在任意组件中发送通知："
            tag="h2"
        >
            <hr>
            <p>可以在 main.js 中全局注册 <high-lighter>AlertData</high-lighter>，
                将 &lt;alert&gt; 组件放置于合适的位置即可在任意组件中发送通知
            </p>
            <demo-box
                title="全局注册 AlertData "
                code='
import {
    AlertData
} from "jet-plan-ui/alert"

const BASE_COMPONENT = {
    name: "base-page",
    render: () => h(resolveComponent("router-view")),
}

createApp(BASE_COMPONENT)
    .use((Vue) => {
        // 全局注册通知控制器
        Vue.config.globalProperties.$jetAlert = new AlertData()
    })
    .mount("#app")

        '
            />
        </doc-item>
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
