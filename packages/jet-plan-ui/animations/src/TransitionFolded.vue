<script>
import { h, Transition } from 'vue';
export default {
    name: 'j-transition-folded',
    methods: {
        enter(el) {
            el.style.height = el.scrollHeight + 'px';
        },
        afterEnter(el) {
            el.style.height = '';
        },

        leave(el) {
            let style = window.getComputedStyle(el);
            let paddingTop = style.paddingTop.split('px')[0];
            let paddingBottom = style.paddingBottom.split('px')[0];
            el.style.height =
                el.scrollHeight - paddingTop - paddingBottom + 'px';
        },
        afterLeave(el) {
            el.style.height = '';
        },
    },
    render() {
        return h(
            Transition,
            {
                name: 'j-transition-folded',
                onEnter: this.enter,
                onAfterEnter: this.afterEnter,

                onLeave: this.leave,
                onAfterLeave: this.afterLeave,
            },
            {
                default: () => this.$slots.default(),
            }
        );
    },
};
</script>

<style>
.j-transition-folded-leave-to,
.j-transition-folded-enter-from {
    margin-bottom: 0 !important;
    margin-top: 0 !important;
    padding-bottom: 0 !important;
    padding-top: 0 !important;
    height: 0 !important;
}
.j-transition-folded-leave-active,
.j-transition-folded-enter-active {
    transition: all 0.4s var(--ease-out) !important;
    transform: translate3d(0, 0, 0);
    backface-visibility: hidden;
    overflow: hidden;
    display: block;
}
</style>
