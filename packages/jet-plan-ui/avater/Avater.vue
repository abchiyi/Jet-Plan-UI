<template>
    <div class="j-avater" :style="styles" :class="classes">
        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'j-avater',
    props: {
        border: {
            type: Boolean,
            default: false,
        },
        circle: {
            type: Boolean,
            default: true,
        },
        size: {
            type: [Number, String],
            default: '2',
        },
    },
    computed: {
        classes() {
            return [this.border ? 'border' : '', this.circle ? 'circle' : ''];
        },
        styles() {
            return {
                '--size': this.size + 'em',
            };
        },
    },
};
</script>

<style >
.j-avater {
    outline: 2px solid var(--border);
    min-height: var(--size);
    min-width: var(--size);
    display: inline-block;
    /* padding: 5px; */
}

.j-avater .content {
    justify-content: center;
    align-items: center;
    height: var(--size);
    display: flex;
}

.j-avater img,
.j-avater.circle {
    border-radius: var(--size);
}

.j-avater img {
    height: var(--size);
    width: var(--size);
    border: unset;
}
</style>
