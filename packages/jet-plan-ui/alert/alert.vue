<template>
    <div :class="classes">
        <transition-group name="alert">
            <alert-item
                v-for="item in data"
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
            console.log(v);
        },
    },
};
</script>

<style>
.j-alert {
    position: fixed;
    height: 100vh;
    width: 280px;
    right: 0;
    top: 0;
    overflow-x: hidden;
    overflow-y: auto;
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
