<template>
    <h2>折叠展开</h2>
    <j-control-bar for-id="re-folded-value">
        <template v-slot:text>
            {{ value ? '折叠' : '展开' }}
        </template>
        <j-button
            id="re-folded-value"
            @click="
                () => {
                    value = !value;
                }
            "
        >
            ClickMe
        </j-button>
    </j-control-bar>
    <demo-box title="折叠展开" :code="code" id="folded">
        <div>
            <j-transition-folded>
                <div class="cube" v-show="value"></div>
            </j-transition-folded>
        </div>
    </demo-box>
</template>

<script>
export default {
    name: 'animation-folded',
    data() {
        return {
            value: true,
            code: `
// HTML
<j-transition-folded>
    <div class="cube"></div>
</j-transition-folded>

// CSS
.cube{
    height: 100px;
    width: 100px;
}
`,
        };
    },
};
</script>
<style>
.cube {
    height: 100px;
    width: 100px;
    background: #fff;
}
</style>
