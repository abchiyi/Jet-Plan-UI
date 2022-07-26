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
    directives: {
        AutoColor,
    },
};
</script>

<style >
.j-avatar {
    font-size: calc(var(--size) / 2);
    background: var(--white);
    min-height: var(--size);
    min-width: var(--size);
    display: inline-block;
    margin: 5px;
}

.j-avatar .content {
    justify-content: center;
    align-items: center;
    height: var(--size);
    display: flex;
}

.j-avatar.border {
    outline: 0.2em solid var(--border-dark);
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
