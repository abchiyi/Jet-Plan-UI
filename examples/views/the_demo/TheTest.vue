<template>
    <j-row X="center">
        <div ref="test">
            <j-button @click="testF"></j-button>
            <h1
                @click="eventBus.push('click')"
                @touchstart="eventBus.push('touchstart')"
                @mousedown="eventBus.push('mousedown')"
                @mouseup="eventBus.push('mouseup')"
                @mouseenter="eventBus.push('mouseenter')"
                @mouseleave="eventBus.push('mouseleave')"
                @touchend="eventBus.push('touchend')"
                @ontouchcancel="eventBus.push('ontouchcancel')"
            >
                Test Page
            </h1>
            <p>{{ eventBus }}</p>
            <j-switch v-model="value" id="test-switch" />
            <j-switch v-model="value1" id="test-switch1" />
            <base-shape
                :class="testClass"
                class="show-box"
                border="2"
                :round="value1"
            >
                <j-cube></j-cube>
            </base-shape>
        </div>
    </j-row>
</template>
<script>
import { getOffset } from '@ui/tool/lib/dom';
import { baseShape } from '../../../packages/jet-plan-ui/shape';
export default {
    name: 'the-test-page',
    components: {
        baseShape,
    },
    data() {
        return {
            eventBus: [],
            value: false,
            value1: false,
        };
    },
    methods: {
        testF() {
            console.log(getOffset(this.$refs.test));
        },
    },
    computed: {
        testClass() {
            return [this.value ? 'xl' : ''];
        },
    },
};
</script>

<style>
.show-box {
    /* height: 60px; */
    /* width: 300px; */
    border-radius: var(--m-radius);
}

.xl {
    height: 200px;
}
</style>
