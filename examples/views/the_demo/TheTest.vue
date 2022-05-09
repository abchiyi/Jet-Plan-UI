<template>
    <div>
        <j-row X="center" style="width: 100%">
            <h1>Test Page</h1>
        </j-row>
        <alert :data="items"></alert>
        <div id="list-complete-demo" class="demo">
            <j-button @click="add">Add</j-button>
            <j-button @click="remove">Remove</j-button>
            <!-- <transition-group name="list-complete" tag="p">
                <alert
                    v-for="item in items"
                    :key="item"
                    class="list-complete-item"
                >
                    {{ item }}</alert
                >
            </transition-group> -->
        </div>
    </div>
</template>
<script>
import { alert } from '../../../packages/jet-plan-ui/alert';
export default {
    name: 'the-test-page',
    components: {
        alert,
    },
    data() {
        return {
            items: [1, 2, 3],
            nextNum: 4,
        };
    },
    methods: {
        randomIndex() {
            return Math.floor(Math.random() * this.items.length);
        },
        add() {
            // this.items.splice(this.randomIndex(), 0, this.nextNum++);
            this.items.push(this.nextNum++);
        },
        remove() {
            this.items.splice(this.randomIndex(), 1);
        },
    },
    computed: {},
};
</script>

<style>
.show-box {
    /* height: 60px; */
    /* width: 300px; */
    border-radius: var(--m-radius);
}

.xl {
    height: 200px;
}

.list-complete-item {
    transition: all 0.6s var(--ease-out);
}

.list-complete-enter-from,
.list-complete-leave-to {
    transform: translateX(-200px);
}

.list-complete-enter-active,
.list-complete-leave-active {
    position: absolute;
}
</style>
