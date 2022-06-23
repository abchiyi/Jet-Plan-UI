<template>
    <div>
        <p>
            <strong>{{ value }}</strong>
        </p>
        <input min="0" v-model="value" id="range" type="range" />
        <slider v-model="value"></slider>
        <slider v-model="value"></slider>
        <slider v-model="value"></slider>
        <slider v-model="value" disabled></slider>
        <j-base-shape round border class="test"></j-base-shape>
    </div>
</template>
<script>
import Slider from '../../../packages/jet-plan-ui/form/Slider.vue';
export default {
    name: 'the-test-page',
    components: { Slider },
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
