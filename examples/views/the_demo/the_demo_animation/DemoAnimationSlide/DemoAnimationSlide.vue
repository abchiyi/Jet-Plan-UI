<template>
    <h2>滑入滑出</h2>
    <j-control-bar for-id="re-slide-value">
        <template v-slot:text>
            {{ value ? '滑出' : '滑入' }}
        </template>
        <j-button
            id="re-slide-value"
            @click="
                () => {
                    value = !value;
                }
            "
        >
            ClickMe
        </j-button>
    </j-control-bar>
    <j-control-bar for-id="re-opacity-value">
        <template v-slot:text>同时应用 Fade 效果</template>
        <j-switch id="re-opacity-value" v-model="opacity"></j-switch>
    </j-control-bar>
    <demo-box title="滑入滑出" :code="code" id="slide">
        <div id="slider-animation-group">
            <j-row class="demo-row" X="center">
                <j-transition-slide :opacity="opacity" position="top">
                    <div class="deom-item" v-show="value">
                        <j-cube>To top</j-cube>
                    </div>
                </j-transition-slide>
                <j-transition-slide :opacity="opacity" position="right">
                    <div class="deom-item" v-show="value">
                        <j-cube>To right</j-cube>
                    </div>
                </j-transition-slide>
            </j-row>
            <j-row class="demo-row" X="center">
                <j-transition-slide
                    :opacity="opacity"
                    class="deom-item"
                    position="left"
                >
                    <div class="deom-item" v-show="value">
                        <j-cube>To left</j-cube>
                    </div>
                </j-transition-slide>
                <j-transition-slide
                    :opacity="opacity"
                    class="deom-item"
                    position="bottom"
                >
                    <div class="deom-item" v-show="value">
                        <j-cube>To bottom</j-cube>
                    </div>
                </j-transition-slide>
            </j-row>
        </div>
    </demo-box>
    <component-documentation v-bind="docData" />
</template>

<script>
import description from './description';
import { TransitionSlide } from '@ui';
export default {
    name: 'animation-slide',
    data() {
        return {
            docData: {
                component: TransitionSlide,
                description: description,
            },
            value: true,
            opacity: true,
            code: `
<j-transition-slide :opacity="true/false" position="top">
    <div class="deom-item" v-show="value">
    <j-cube>To top</j-cube>
    </div>
</j-transition-slide>`,
        };
    },
};
</script>

<style>
.demo-row {
    height: 100px;
}
.deom-item .j-cube {
    font-size: 14px;
}
.deom-item + .deom-item {
    margin-left: 5px;
}
.demo-row + .demo-row {
    margin-top: 5px;
}
</style>
