<template>
    <div>
        <j-row X="center" style="width: 100%">
            <h1>Test Page</h1>
        </j-row>
        <alert
            @remove="remove"
            style="padding: 100px 0"
            :data="AlertData"
        ></alert>
        <div id="list-complete-demo" class="demo">
            <j-button @click="AlertData.info(nextNum++, 3000)"
                >Alert Info</j-button
            >
            <j-button @click="AlertData.error(nextNum++)">Alert Error</j-button>
            <j-button @click="AlertData.success(nextNum++)"
                >Alert Success</j-button
            >
            <j-button @click="AlertData.warning(nextNum++)"
                >Alert Warning</j-button
            >
            <j-button @click="AlertData.removeAll()">Remove All</j-button>
        </div>
    </div>
</template>
<script>
import { alert, AlertData } from '../../../packages/jet-plan-ui/alert';
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

            AlertData: new AlertData(),
        };
    },
    methods: {
        randomIndex() {
            return Math.floor(Math.random() * this.items.length);
        },
        add() {
            this.items.splice(this.randomIndex(), 0, this.nextNum++);
        },
        remove(v) {
            const index = this.items.indexOf(v);
            if (index !== -1) {
                this.items.splice(index, 1);
            }
        },
        removeAll() {
            let ms = 200;
            this.items.forEach((item) => {
                setTimeout(() => {
                    this.remove(item);
                }, (ms += 200));
            });
        },
    },
    computed: {},
};
</script>

<style>
</style>
