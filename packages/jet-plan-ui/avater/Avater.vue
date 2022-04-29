<template>
    <div v-auto-color class="j-avater" :style="styles" :class="classes">
        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
import { AutoColor } from '../tool/directives';
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
        color: {
            type: String,
            default: '',
        },
        directives: {
            AutoColor,
        },
    },
    computed: {
        classes() {
            return [this.border ? 'border' : '', this.circle ? 'circle' : ''];
        },
        styles() {
            return {
                '--size': this.size + 'em',
                '--color': this.color ? this.color : 'var(--foreground)',
            };
        },
    },
};
</script>

<style >
.j-avater,
.j-avater * {
    transition: 0.5s var(--ease-in-out), outline-width 0s;
}

.j-avater {
    background: var(--color);
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

.j-avater.border {
    outline: 2px solid var(--border);
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
