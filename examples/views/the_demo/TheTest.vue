<template>
    <div>
        <h1>{{  value  }}</h1>
        <j-slider
            v-model="value"
            :step="[10, 20, 30]"
        />
        <j-slider
            v-model="value"
            :max="30"
            :min="10"
        />
    </div>
</template>
<script>
export default {
    name: 'the-test-page',
    components: {},
    data () {
        return {
            value: 30,
        }
    },
    methods: {
        log (v) {
            console.log(v)
        },
    },
    computed: {},
}
</script>

<style>
.test {
    height: 1rem;
    width: 3rem;
    background-color: aliceblue;
    display: inline-block;
}
</style>
