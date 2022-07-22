<template>
    <j-drawer from="right" expand :class="classes">
        <transition-group name="alert">
            <alert-item
                v-for="item in data.alerts"
                @wangToClose="wangToClose"
                v-bind="item"
                :_key="item"
                :key="item"
            >
                {{ item.content }}
            </alert-item>
        </transition-group>
    </j-drawer>
</template>

<script>
import { Drawer as jDrawer } from '../layout';
import alertItem from './alertItem.vue';
const NAME = 'j-alert';
export default {
    name: NAME,
    props: {
        data: {
            type: Object,
            require: true,
        },
    },
    components: {
        alertItem,
        jDrawer,
    },
    computed: {
        classes() {
            return [NAME];
        },
    },
    methods: {
        wangToClose(v) {
            this.data.remove(v);
        },
    },
};
</script>

<style>
.j-alert {
    box-sizing: border-box;
    width: 280px;
    padding: 3vh 0;
    pointer-events: none;
    bottom: unset;
}

.alert-enter-from,
.alert-leave-to {
    transform: translateX(100%);
}

.alert-leave-active {
    position: absolute;
    width: 100%;
}
</style>
