<template>
    <div :class="classes">
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
    </div>
</template>

<script>
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
    },
    computed: {
        classes() {
            return [NAME, 'j-hidden-scrollbar'];
        },
    },
    methods: {
        wangToClose(v) {
            // this.$emit('remove', v);
            this.data.remove(v);
        },
    },
};
</script>

<style>
.j-alert {
    box-sizing: border-box;
    position: fixed;
    height: 100vh;
    width: 280px;
    right: 0;
    bottom: 0;
    overflow-x: hidden;
    overflow-y: auto;
    padding: 3vh 0;
    pointer-events: none;
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
