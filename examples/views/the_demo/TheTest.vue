<template>
    <j-row X="center">
        <div>
            <h1
                @click="eventBus.push('click')"
                @touchstart="eventBus.push('touchstart')"
                @mousedown="eventBus.push('mousedown')"
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
