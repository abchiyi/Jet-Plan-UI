<script>
import { h } from 'vue';
const NAME = 'j-base-shape';

export default {
    name: NAME,
    computed: {
        class() {
            return [NAME];
        },
    },
    render() {
        return h('div', {
            class: this.class,
        });
    },
};
</script>

<style>
</style>
