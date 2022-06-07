
<template>
    <base-action
        @hover_from="_showBubble"
        @hover_to="hiddenBubble"
        :class="classes"
    >
        <slot></slot>
        <j-transition-slide position="top">
            <j-button tag="div" class="bubble" v-show="showBubble">
                {{ message }}
            </j-button>
        </j-transition-slide>
    </base-action>
</template>

<script>
import baseAction from '../action-feedback/baseAction.vue';
const Name = 'j-bubble';
export default {
    name: Name,
    components: {
        baseAction,
    },
    props: {
        message: {
            required: true,
        },
    },
    computed: {
        classes() {
            return [Name];
        },
    },

    data() {
        return {
            showBubble: false,
        };
    },
    methods: {
        _showBubble() {
            this.showBubble = true;
        },
        hiddenBubble() {
            this.showBubble = false;
        },
    },
};
</script>

<style>
.j-bubble {
    display: inline-block;
    position: relative;
}

.j-bubble .bubble {
    position: absolute;
}
</style>
