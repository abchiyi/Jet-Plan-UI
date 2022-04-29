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
.j-avater,
.j-avater * {
    transition: 0.5s var(--ease-in-out);
}

.j-avater {
    background: var(--foreground);
    outline: 2px solid var(--border);
    min-height: var(--size);
    min-width: var(--size);
    display: inline-block;
}

.j-avater .content {
    justify-content: center;
    align-items: center;
    height: var(--size);
    display: flex;
}

.j-avater img,
.j-avater {
    border-radius: var(--m-radius);
}

.j-avater.circle img,
.j-avater.circle {
    border-radius: var(--size);
}

.j-avater img {
    height: var(--size);
    width: var(--size);
}
</style>
