<template>
    <j-card class="j-demo-box">
        <j-row class="demo-box-header" Y="center" space-mode="between">
            <span class="demo-title text-hint">{{ title }}</span>
        </j-row>
        <div ref="showDemo" class="demo-box-demo">
            <div v-if="isDemo">
                <slot></slot>
            </div>
        </div>
        <j-code-box v-if="code" :code="code" can-copy>
            <template v-slot:icon-copy>
                <i class="bi bi-files"></i>
            </template>
        </j-code-box>
    </j-card>
</template>

<script>
export default {
    name: 'demo-box',
    mounted() {
        if (this.$refs.showDemo.children.length > 1) {
            console.error(`<Demo-box> slot --> "default"
Only one child node is allowed !

${this.$refs.showDemo.innerHTML}
        `);
        }
    },
    props: {
        expand: {
            type: Boolean,
            default: false,
        },
        code: {
            type: String,
        },
        title: {
            type: String,
            required: true,
            default: 'Title is required',
        },
    },
    computed: {
        isDemo() {
            return Boolean(this.$slots.default);
        },
    },
};
</script>

<style>
.j-demo-box {
    padding: 20px;
}
.demo-box-demo > *:nth-child(1) {
    background-color: var(--background);
    border-radius: var(--m-radius);
    padding: 1rem 2rem;
}
.j-demo-box .demo-title {
    padding-left: 0.5em;
}
.j-demo-box .demo-box-header,
.j-demo-box .demo-box-demo {
    margin-bottom: 1em;
}

.j-demo-box .demo-box-header > .j-button {
    font-size: 1.2rem;
    padding: 0 10px;
}
</style>
