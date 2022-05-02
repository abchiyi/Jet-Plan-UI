<script>
import { h } from 'vue';
import { propInitBoolean } from '../tool/lib';
const name = 'j-base-action';
export default {
    name: name,
    props: {
        action: propInitBoolean(false),
        hover: propInitBoolean(false),
        focus: propInitBoolean(false),
    },
    computed: {
        class() {
            return [
                this.action ? 'action' : null,
                this.hover ? 'hover' : null,
                this.focus ? 'focus' : null,
            ];
        },
    },
    render() {
        return h('div', {
            class: [name, ...this.class],
        });
    },
};
</script>

<style>
</style>
