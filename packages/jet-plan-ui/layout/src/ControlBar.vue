<template>
    <j-action-feedback active :class="classes" class="j-control-bar">
        <j-row :reverse="reverse" space-mode="between">
            <j-row
                class="control-label"
                :for="forId"
                tag="label"
                Y="center"
                :X="reverse ? 'end' : 'start'"
                style="text-align: start"
            >
                <slot name="text">
                    <p>Display text</p>
                </slot>
            </j-row>
            <j-row class="control-comp" Y="center">
                <slot>
                    <p>Control</p>
                </slot>
            </j-row>
        </j-row>
    </j-action-feedback>
</template>

<script>
import { Row } from '../../gird/';
import { propInitBoolean } from '../../tool/lib';
export default {
    name: 'j-control-bar',
    components: {
        'j-row': Row,
    },
    computed: {
        classes() {
            return [this.noBackground ? 'no-bg' : ''];
        },
    },
    props: {
        forId: { type: String, required: true },
        reverse: { type: Boolean, default: false },
        noBackground: propInitBoolean(false),
    },
};
</script>

<style>
.control-label {
    user-select: none;
}

.j-control-bar {
    border-radius: var(--m-radius);
    background: var(--foreground);
    font-size: 1rem;
    display: block;
    margin: 0.8rem 0;
}

.j-control-bar.no-bg {
    background: unset;
}

.control-comp,
.control-label {
    height: 2.7rem;
}
.no-bg .control-comp,
.no-bg .control-label {
    height: 2rem;
}

.control-label {
    margin-left: 10px;
    width: 100%;
}

.control-comp {
    margin-right: 10px;
}

.reverse .control-comp {
    margin-left: 10px;
    margin-right: unset;
}

.reverse .control-label {
    margin-right: 10px;
    margin-left: unset;
}
</style>
