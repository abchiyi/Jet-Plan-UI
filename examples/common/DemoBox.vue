<template>
    <j-card class="j-demo-box">
        <j-row Y="center" space-mode="between">
            <span class="demo-title text-hint">{{ title }}</span>
            <j-button v-if="codeControl" @click="expand_" text
                >View Code</j-button
            >
        </j-row>
        <div ref="showDemo" class="demo-box-demo">
            <div v-if="isDemo">
                <slot></slot>
            </div>
        </div>
        <j-transition-folded title="展开Code">
            <j-code-box can-copy :id="codeID" :code="code" v-show="value">
                <template v-slot:icon-copy>
                    <i class="bi bi-clipboard"></i>
                </template>
            </j-code-box>
        </j-transition-folded>
    </j-card>
</template>

<script>
import { scrollTo } from '@ui/tool/lib/dom';
export default {
    name: 'demo-box',
    mounted() {
        if (this.$refs.showDemo.children.length > 1) {
            console.error(`<Demo-box> slot --> "default"
Only one child node is allowed !

${this.$refs.showDemo.innerHTML}
        `);
        }

        if (!this.isDemo) {
            this.codeControl = false;
            this.value = true;
        }
    },
    props: {
        expand: {
            type: Boolean,
            default: false,
        },
        code: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true,
            default: 'Title is required',
        },
    },
    data() {
        return {
            value: this.expand,
            codeControl: true,
        };
    },
    methods: {
        expand_() {
            this.value = !this.value;
            if (this.value) {
                setTimeout(() => {
                    scrollTo(`#${this.codeID}`, 200);
                }, 300);
            }
        },
    },
    computed: {
        codeID() {
            return this.title + '-code';
        },
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
    margin: 20px 0;
}
.j-demo-box .demo-title {
    padding-left: 0.5em;
}
</style>
