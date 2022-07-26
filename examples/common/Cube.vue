<template>
    <div :class="classes">
        <j-row X="center" Y="center" warp>
            <slot></slot>
        </j-row>
    </div>
</template>

<script>
export default {
    name: 'j-cube',
    props: {
        dark: {
            type: Boolean,
            default: false,
        },
    },
    computed: {
        classes() {
            let classes = ['j-cube'];
            if (this.dark) classes.push('dark');
            return classes;
        },
    },
};
</script>

<style>
.j-cube > .j-row {
    height: 100%;
}
.j-cube {
    width: 100px;
    height: 100px;
    border-radius: var(--m-radius);
    background-color: var(--primary-dark);
    /* 文本设置 */
    color: #fff;
    /* transition: 0.4s ease-in-out; */
    overflow: hidden;
    font-family: 'SarasaMono';
    font-size: 1.3em;
}
.j-cube.dark {
    background-color: var(--border-dark);
    color: inherit;
}
</style>
