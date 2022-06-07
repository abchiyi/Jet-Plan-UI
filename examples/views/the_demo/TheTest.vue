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
        <j-switch id="enter-switch" v-model="value" />

        <div class="bubble" @mouseenter="enter" @mouseout="out">
            <p>popup 测试</p>

            <j-transition-slide position="top">
                <j-button class="pp" v-show="value">Popup message</j-button>
            </j-transition-slide>
        </div>

        <bubble message="Test bubble">
            <p>123</p>
        </bubble>
    </div>
</template>
<script>
import { alert, AlertData } from '../../../packages/jet-plan-ui/alert';
import { bubble } from '../../../packages/jet-plan-ui/bubble';
export default {
    name: 'the-test-page',
    components: {
        alert,
        bubble,
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
            value: false,
            AlertData: new AlertData(),
        };
    },
    methods: {
        enter() {
            this.value = true;
            console.log('enter');
        },
        out() {
            this.value = false;
            console.log('out');
        },
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
.bubble {
    position: relative;
    display: inline-block;
}

.pp {
    position: absolute;
}
</style>
