<template>
    <div>
        <j-row X="center" style="width: 100%">
            <h1>Test Page</h1>
        </j-row>
        <alert style="padding: 100px 0" :data="items"></alert>
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
            items: [
                {
                    type: 'info',
                    content: 'Info',
                },
                {
                    type: 'error',
                    content: 'Error',
                },
                {
                    type: 'success',
                    content: 'Success',
                },
                {
                    type: 'warning',
                    content: 'Warning',
                },
            ],
            nextNum: 4,
        };
    },
    methods: {
        randomIndex() {
            return Math.floor(Math.random() * this.items.length);
        },
        add() {
            // this.items.splice(this.randomIndex(), 0, this.nextNum++);
            this.items.push({
                content: this.nextNum++,
            });
        },
        remove() {
            this.items.splice(this.randomIndex(), 1);
        },
    },
    computed: {},
};
</script>

<style>
</style>
