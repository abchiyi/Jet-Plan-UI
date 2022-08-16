<template>
    <div>
        <h1 v-focus="log">Test</h1>
        <j-checkbox id="1" v-model="value1" />
        <j-checkbox id="2" v-model="value" />
        <j-checkbox id="3" v-model="value" />
        <j-checkbox id="4" disabled v-model="value" />

        <input v-model="value1" type="checkbox" v-on:change="log" />
    </div>
</template>
<script>
export default {
    name: 'the-test-page',
    components: {},
    data() {
        return {
            value: false,
            value1: true,
        };
    },
    methods: {
        log(v) {
            console.log(v);
        },
    },
    computed: {},
};
</script>

<style>
.test {
    height: 1rem;
    width: 3rem;
    background-color: aliceblue;
    display: inline-block;
}
</style>
