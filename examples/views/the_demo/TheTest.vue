<template>
    <j-row X="center">
        <div>
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
        </div>
    </j-row>
</template>
<script>
export default {
    name: 'the-test-page',
    data() {
        return {
            eventBus: [],
        };
    },
};
</script>

<style>
</style>
