<script>
import { h } from 'vue';
import { propInit } from '../tool/lib';
const name = 'j-base-action';

export default {
    name: name,
    mounted() {
        document.addEventListener('click', this.focusHandler);
    },
    unmounted() {
        document.removeEventListener('click', this.focusHandler);
    },
    props: {
        tag: propInit(String, 'div'),
    },
    computed: {
        renderSlotDefault() {
            if (this.$slots.default) {
                return this.$slots.default();
            } else {
                return null;
            }
        },
    },
    data() {
        return {
            onTouch: {
                // ontouchstart: this.handlerTouchStartEvent,
                ontouchstart: this.handlerTouchEvent,
                ontouchcancel: this.handlerTouchEvent,
                ontouchend: this.handlerTouchEvent,
            },
            isTouch: false,
        };
    },
    emits: [
        'active_from',
        'active_to',
        'hover_from',
        'hover_to',
        'focus_from',
        'focus_to',
    ],
    methods: {
        activeFrom(event) {
            this.$emit('active_from', event);
        },
        activeTo(event) {
            this.$emit('active_to', event);
        },
        hoverFrom(event) {
            this.$emit('hover_from', event);
        },
        hoverTo(event) {
            this.$emit('hover_to', event);
        },
        focusHandler(event) {
            if (this.$refs.self.contains(event.target)) {
                this.$emit('focus_from', {
                    active: true,
                    event: event,
                });
            } else {
                this.$emit('focus_to', {
                    active: false,
                    event: event,
                });
            }
        },
        handlerMouseEvent(event) {
            if (!this.isTouch) {
                if (event.type == 'mousedown') {
                    this.activeFrom({
                        active: true,
                        event: event,
                    });
                } else if (event.type == 'mouseup') {
                    this.activeTo({
                        active: false,
                        event: event,
                    });
                }
            }
        },
        handlerTouchEvent(event) {
            if (event.type == 'touchstart') {
                this.isTouch = true;
                const callData = {
                    active: true,
                    event: event,
                };
                this.activeFrom(callData);
                // Hover in touch
                if (this.isTouch) this.hoverFrom(callData);
            } else if (['touchend', 'touchcancel'].includes(event.type)) {
                const callData = {
                    active: false,
                    event: event,
                };

                this.activeTo(callData);
                // Hover in touch
                if (this.isTouch) this.hoverTo(callData);
            }
        },
        handlerHover(event) {
            if (!this.isTouch) {
                if (event.type == 'mouseenter') {
                    this.hoverFrom({
                        active: true,
                        event: event,
                    });
                } else if (event.type == 'mouseleave') {
                    this.hoverTo({
                        active: false,
                        event: event,
                    });
                }
            }
        },
    },
    render() {
        return h(
            this.tag,
            {
                class: [name],
                // Mouse
                onmousedown: this.handlerMouseEvent,
                onmouseup: this.handlerMouseEvent,
                // Touch
                ...this.onTouch,
                // Hover
                onmouseenter: this.handlerHover,
                onmouseleave: this.handlerHover,
                // Ref
                ref: 'self',
            },
            {
                default: () => [this.renderSlotDefault],
            }
        );
    },
};
</script>

<style>
</style>
