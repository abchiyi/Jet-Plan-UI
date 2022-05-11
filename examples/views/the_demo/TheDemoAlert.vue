<template>
    <div id="the-demo-alert">
        <h1>Alert</h1>
        <p>用于简短的消息通知</p>
        <hr />
        <doc-item name="Props:" title-is="h2">
            <li>
                <p><high-lighter>data</high-lighter> type - Array, required</p>
                <p>用于创建消息通知</p>
            </li>
        </doc-item>
        <h2>示例:</h2>
        <hr />
        <demo-box title="j-alert" :code="`1`">
            <h3>通知类型：</h3>
            <hr />
            <j-row warp>
                <j-control-bar reverse no-background for-id="alert-info">
                    <template v-slot:text>
                        <span> Info </span>
                    </template>
                    <j-radio id="alert-info" value="info" v-model="type" />
                </j-control-bar>

                <j-control-bar reverse no-background for-id="alert-success">
                    <template v-slot:text>
                        <span> Success </span>
                    </template>
                    <j-radio
                        id="alert-success"
                        value="success"
                        v-model="type"
                    />
                </j-control-bar>

                <j-control-bar reverse no-background for-id="alert-error">
                    <template v-slot:text>
                        <span> Error </span>
                    </template>
                    <j-radio id="alert-error" value="error" v-model="type" />
                </j-control-bar>

                <j-control-bar reverse no-background for-id="alert-warning">
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
            <j-input id="alert-timeout-ms" v-model="alertTimeout"></j-input>
            <label for="alert-timeout-ms">ms</label>
            <br />
            <br />
            <j-button @click="sendAlert" row>
                <strong> Send alert </strong>
            </j-button>
        </demo-box>
    </div>
</template>

<script>
export default {
    name: 'the-demo-alert',
    data() {
        return {
            type: 'info',
            alertTimeout: 2000,
        };
    },
    methods: {
        sendAlert() {
            // $jetAlert.info('Hello Alert', 2000);
            switch (this.type) {
                case 'success':
                    this.$jetAlert.success(
                        `${this.type.toUpperCase()} - Hello Alert`,
                        this.alertTimeout
                    );
                    break;
                case 'error':
                    this.$jetAlert.error(
                        `${this.type.toUpperCase()} - Hello Alert`,
                        this.alertTimeout
                    );
                    break;
                case 'warning':
                    this.$jetAlert.warning(
                        `${this.type.toUpperCase()} - Hello Alert`,
                        this.alertTimeout
                    );
                    break;

                default:
                    this.$jetAlert.info(
                        `${this.type.toUpperCase()} - Hello Alert`,
                        this.alertTimeout
                    );
                    break;
            }
            this.$jetAlert;
        },
    },
};
</script>

<style>
</style>
