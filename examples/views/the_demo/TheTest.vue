<template>
    <div>
        <testDoc :component="Button"></testDoc>
    </div>
</template>
<script>
import { ActionFeedback } from '../../../packages/jet-plan-ui';
import testDoc from '../../common/componentDocumentation.vue';
export default {
    name: 'the-test-page',
    components: {
        testDoc,
    },
    data() {
        return {
            value: 0,
            Button: ActionFeedback,
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
