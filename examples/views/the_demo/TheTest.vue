<template>
    <div>
        <p>
            <strong>{{ value }}</strong>
        </p>
        <input
            @change="log"
            min="0"
            max="200"
            v-model="value"
            id="range"
            type="range"
            @onchange="log"
        />
        <slider style="width: 100%"></slider>
        <slider></slider>
        <slider></slider>
        <slider></slider>
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
