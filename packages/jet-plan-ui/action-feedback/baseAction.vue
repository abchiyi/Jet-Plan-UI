<script>
import { h } from 'vue';
import { propInitBoolean, propInit } from '../tool/lib';
const name = 'j-base-action';
export default {
    name: name,
    props: {
        action: propInitBoolean(false),
        hover: propInitBoolean(false),
        focus: propInitBoolean(false),
        tag: propInit(String, 'div'),
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
        return h(this.tag, {
            class: [name, ...this.class],
        });
    },
};
</script>

<style>
</style>
