<template>
    <j-row
        v-shadow:bottom="8"
        :class="classes"
        class="frosted-glass"
        spaceMode="between"
        Y="center"
    >
        <div class="content">
            <slot></slot>
        </div>
        <j-button text hover>
            <i class="bi bi-x"></i>
        </j-button>
    </j-row>
</template>

<script>
import { Shadow } from '../tool/directives';
import { row } from '../layout';
import { Button } from '../form';
const NAME = 'j-alert-item';
export default {
    name: NAME,
    components: {
        'j-button': Button,
        'j-row': row,
    },
    computed: {
        classes() {
            return [NAME];
        },
    },
    directives: {
        Shadow,
    },
};
</script>

<style>
.j-alert-item {
    transition: all 0.6s var(--ease-out);
    border-radius: var(--m-radius);
    margin-bottom: 0.5rem;
    height: 2.5rem;
    width: 100%;
}

.j-alert-item > .j-button,
.j-alert-item > .content {
    margin: 0 4px;
}
</style>
