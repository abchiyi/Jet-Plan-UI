<template>
    <div>
        <p>
            <strong>{{ value }}</strong>
        </p>
        <input min="0" v-model="value" id="range" type="range" />
        <slider v-model="value" style="width: 100%"></slider>
        <slider v-model="value"></slider>
        <slider v-model="value" disabled></slider>
    </div>
</template>
<script>
import Slider from '../../../packages/jet-plan-ui/form/Slider.vue';
export default {
    name: 'the-test-page',
    components: { Slider },
    data() {
        return {
            value: 5,
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
</style>
