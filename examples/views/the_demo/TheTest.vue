<template>
    <div>
        <h1 v-focus="log">Test</h1>
    </div>
</template>
<script>
export default {
    name: 'the-test-page',
    components: {},
    data() {
        return {
            value: 0,
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
