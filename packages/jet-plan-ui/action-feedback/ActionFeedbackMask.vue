<script>
import { h } from 'vue';
export default {
    name: 'j-mask',
    props: {
        data: {
            type: Object,
            required: true,
        },
    },
    computed: {
        styles() {
            return {
                '--opacity': this.data.opacity,
                backgroundColor: this.data.color,
            };
        },
    },
    render() {
        return h('span', {
            class: ['j-mask', 'mask'],
            style: this.styles,
        });
    },
};
</script>
<style scoped>
span {
    transform: translate3d(0, 0, 0);
    opacity: var(--opacity);
    pointer-events: none;
    position: absolute;
    user-select: none;
    display: block;
    height: 100%;
    width: 100%;
}

.mask-leave-to {
    transition: 0.4s cubic-bezier(0.6, 0.6, 0.4, 0.7);
    opacity: 0;
}
</style>
