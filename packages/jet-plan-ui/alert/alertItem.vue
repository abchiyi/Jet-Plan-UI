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
        <j-button @click="wangToClose" text hover>
            <i class="bi bi-x"></i>
        </j-button>
    </j-row>
</template>

<script>
import { Shadow } from '../tool/directives';
import { Row } from '../gird';
import { Button } from '../form';
const NAME = 'j-alert-item';
export default {
    name: NAME,
    props: {
        type: {
            type: String,
            default: 'info',
            validator: (v) => {
                const value = ['info', 'error', 'success', 'warning'];
                return value.indexOf(v) !== -1;
            },
        },
        _key: {
            required: true,
        },
        timeout: {
            type: Number,
            default: 0,
        },
    },
    mounted() {
        if (this.timeout) {
            setTimeout(() => {
                this.wangToClose();
            }, this.timeout);
        }
    },
    components: {
        'j-button': Button,
        'j-row': Row,
    },
    computed: {
        classes() {
            return [NAME, this.type];
        },
    },
    directives: {
        Shadow,
    },
    methods: {
        wangToClose() {
            this.$emit('wangToClose', this._key);
        },
    },
};
</script>

<style>
.j-alert-item {
    transition: all 0.6s var(--ease-out);
    border-radius: var(--m-radius);
    margin-bottom: 0.5rem;
    margin-left: 15px;
    height: 2.5rem;
}
.j-alert-item::before {
    transition: 0.3s var(--ease-out);
    background: var(--info);
    color: var(--text-light);
    border-radius: 0.3em;
    height: 1.2em;
    margin: 0 4px;
    width: 0.3em;
    content: '';
    left: 0em;
}

.j-alert-item.info::before {
    background: var(--info);
}
.j-alert-item.error::before {
    background: var(--error);
}
.j-alert-item.success::before {
    background: var(--success);
}
.j-alert-item.warning::before {
    background: var(--warning);
}

.j-alert-item > .j-button,
.j-alert-item > .content {
    margin: 0 4px;
}
</style>
