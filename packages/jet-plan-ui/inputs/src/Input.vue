<template>
    <input v-model="value" :class="className" />
</template>

<script>
export default {
    name: 'j-input',
    data: function () {
        return {
            value: this.modelValue,
        };
    },
    props: {
        disabled: Boolean,
        modelValue: {},
    },
    computed: {
        className() {
            return ['j-input', this.disabled ? 'disabled' : ''];
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
};
</script>

<style>
.j-input:focus-visible {
    outline: unset;
}

.j-input {
    background-color: var(--foreground);
    border-radius: 0.28em;
    padding: 0.4em;
    color: inherit;
    border: unset;
    /* opacity: 0.4; */
    height: 1em;
    width: 13em;
}

.j-input.disabled {
    cursor: not-allowed;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
    appearance: unset;
    opacity: 0.3;
}
/* @supports (backdrop-filter: brightness(90%)) {
    .j-input {
        backdrop-filter: brightness(90%);
        background-color: unset;
        border: unset;
        opacity: 1;
    }
} */
</style>
