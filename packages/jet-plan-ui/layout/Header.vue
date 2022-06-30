<script>
import { h } from 'vue';
export default {
    name: 'j-header',
    render() {
        return h(
            'header',
            {
                class: ['j-header', 'frosted-glass'],
            },
            this.$slots
        );
    },
};
</script>

<style>
.j-header {
    margin-top: unset !important;
    position: fixed;
    right: 0;
    left: 0;
    top: 0;
}
</style>
