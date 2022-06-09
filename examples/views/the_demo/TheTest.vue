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
        <strong>{{ position }}</strong>
        <j-row spaceMode="between" id="group-top">
            <label for="top">
                <j-radio v-model="position" id="top" value="top" />
                <p>top</p>
            </label>
            <label for="top-start">
                <j-radio v-model="position" id="top-start" value="top-start" />
                <p>top-start</p>
            </label>
            <label for="top-end">
                <j-radio v-model="position" id="top-end" value="top-end" />
                <p>top-end</p>
            </label>
        </j-row>
        <j-row spaceMode="between" id="group-bottom">
            <label for="bottom">
                <j-radio v-model="position" id="bottom" value="bottom" />
                <p>bottom</p>
            </label>
            <label for="bottom-start">
                <j-radio
                    v-model="position"
                    id="bottom-start"
                    value="bottom-start"
                />
                <p>bottom-start</p>
            </label>
            <label for="bottom-end">
                <j-radio
                    v-model="position"
                    id="bottom-end"
                    value="bottom-end"
                />
                <p>bottom-end</p>
            </label>
        </j-row>
        <j-row spaceMode="between" id="group-left">
            <label for="left">
                <j-radio v-model="position" id="left" value="left" />
                <p>left</p>
            </label>
            <label for="left-top">
                <j-radio v-model="position" id="left-top" value="left-top" />
                <p>left-top</p>
            </label>
            <label for="left-bottom">
                <j-radio
                    v-model="position"
                    id="left-bottom"
                    value="left-bottom"
                />
                <p>left-bottom</p>
            </label>
        </j-row>
        <j-row spaceMode="between" id="group-right">
            <label for="right">
                <j-radio v-model="position" id="right" value="right" />
                <p>right</p>
            </label>
            <label for="right-top">
                <j-radio v-model="position" id="right-top" value="right-top" />
                <p>right-top</p>
            </label>
            <label for="right-bottom">
                <j-radio
                    v-model="position"
                    id="right-bottom"
                    value="right-bottom"
                />
                <p>right-bottom</p>
            </label>
        </j-row>
        <bubble message="Test bubble " :position="position">
            <P>Test bubble</P>
        </bubble>
        <bubble message="Test bubble " :position="position">
            <j-button>Test bubble</j-button>
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
            position: 'top',
        };
    },
    methods: {
        enter() {
            this.value = true;
        },
        out() {
            this.value = false;
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
