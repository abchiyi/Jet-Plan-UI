<script>
import { h } from 'vue';
import { propInitBoolean } from '../tool/lib';
export default {
    name: 'j-base-action-feedback',
    props: {
        action: propInitBoolean(false),
        hover: propInitBoolean(false),
    },
    computed: {
        class() {
            return [this.action ? 'action' : null, this.hover ? 'hover' : null];
        },
    },
    render() {
        return h('div', {
            class: ['j-base-action-feedback', ...this.class],
        });
    },
};
</script>

<style>
</style>
