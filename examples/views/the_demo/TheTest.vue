<template>
    <div>
        <h1>{{ value }} -- {{ value1 }}</h1>
        <j-bubble :message="value" position="top">
            <j-slider @percentage="log" v-model="value" />
        </j-bubble>
    </div>
</template>
<script>
export default {
    name: 'the-test-page',
    components: {},
    data() {
        return {
            value: 1,
            value1: true,
        };
    },
    methods: {
        log(v) {
            console.log(v);
            this.value1 = v;
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
