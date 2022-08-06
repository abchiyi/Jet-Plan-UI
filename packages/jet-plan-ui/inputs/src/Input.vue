<template>
    <label :for="id" :class="className" v-focus="blur">
        <j-row X="center" Y="center" ref="before" class="before">
            <slot name="before"></slot>
        </j-row>
        <input
            :id="id"
            @focus="__focus(true)"
            v-model="value"
            :disabled="disabled"
        />
        <j-row X="center" Y="center" ref="after" class="after">
            <slot name="after"></slot>
        </j-row>
    </label>
</template>

<script>
import { Row } from '../../gird';
const NAME = 'j-input';
export default {
    name: NAME,
    data: function () {
        return {
            value: this.modelValue,
            nodeReady: false,
            focus: undefined,
        };
    },
    components: {
        'j-row': Row,
    },
    props: {
        id: {
            type: String,
            required: true,
        },
        modelValue: {},
        disabled: {
            type: Boolean,
            default: false,
        },
    },
    mounted() {
        this.nodeReady = true;
    },
    computed: {
        className() {
            return [
                'j-input',
                this.before ? 'slot-before' : '',
                this.after ? 'slot-after' : '',
                this.disabled ? 'disabled' : '',
                this.focus ? 'focus' : '',
            ];
        },
        before() {
            if (this.nodeReady) {
                return this.$refs.before.$el.children.length;
            }
            return 0;
        },
        after() {
            if (this.nodeReady) {
                return this.$refs.after.$el.children.length;
            }
            return 0;
        },
    },
    watch: {
        modelValue(val) {
            this.value = val;
        },
        value(val) {
            this.$emit('update:modelValue', val);
        },
    },
    methods: {
        __focus(v) {
            this.focus = v;
        },
        blur() {
            this.focus = false;
        },
    },
};
</script>

<style>
.j-input {
    display: inline-block;
    position: relative;
    margin: 0 0.5em;
}

.j-input > input {
    transition: outline 0.3s var(--ease-out);
    outline: 0.2em solid var(--border);
    background-color: var(--white);
    border-radius: var(--s-radius);
    /* box-sizing: border-box; */
    padding: 0 0.6em;
    color: inherit;
    border: unset;
    height: 1.5em;
    width: 10em;
}

.j-input.slot-before > input {
    padding-left: 1.875em;
}

.j-input.slot-after > input {
    padding-right: 1.875em;
}

.j-input.slot-after > .after,
.j-input.slot-before > .before {
    position: absolute;
    height: 1.5em;
    width: 1.5em;
    left: 0;
}

/* 按钮在插槽中的表现 */
.j-input.slot-after > .after > .j-button,
.j-input.slot-before > .before > .j-button {
    border-radius: 0.4em;
    padding: 0.1em 0.3em;
    font-size: 0.75em;
    margin: unset;
}

.j-input.slot-after > .after {
    left: unset;
    right: 0;
    top: 0;
}

/* ----- Focus ----- */
.j-input.focus > input:focus-visible {
    outline-color: var(--info);
}

/* ----- Disabled ----- */
.j-input > input:disabled {
    background: var(--border-light);
    outline-color: var(--border);
    color: var(--text-disabled);
    cursor: not-allowed;
    user-select: none;
    appearance: unset;
}

.j-input.disabled > .after,
.j-input.disabled > .before {
    color: var(--text-disabled);
}
</style>
