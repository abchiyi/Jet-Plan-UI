<template>
    <div v-auto-color class="j-avatar" :style="styles" :class="classes">
        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
import { AutoColor } from '../tool/directives';
export default {
    name: 'j-avatar',
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
    directives: {
        AutoColor,
    },
};
</script>

<style >
.j-avatar,
.j-avatar * {
    transition: 0.5s var(--ease-in-out), outline-width 0s;
}

.j-avatar {
    background: var(--color);
    min-height: var(--size);
    min-width: var(--size);
    display: inline-block;
}

.j-avatar .content {
    justify-content: center;
    align-items: center;
    height: var(--size);
    display: flex;
}

.j-avatar.border {
    outline: 2px solid var(--border);
}

.j-avatar img,
.j-avatar {
    border-radius: var(--m-radius);
}

.j-avatar.circle img,
.j-avatar.circle {
    border-radius: var(--size);
}

.j-avatar img {
    height: var(--size);
    width: var(--size);
}
</style>
