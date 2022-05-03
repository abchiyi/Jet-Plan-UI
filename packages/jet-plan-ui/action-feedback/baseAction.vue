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
                ontouchstart: this.handlerTouchStartEvent,
                ontouchcancel: this.activeTo,
                ontouchend: this.activeTo,
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
                this.$emit('focus_from', event);
            } else {
                this.$emit('focus_to', event);
            }
        },
        handlerMouseEvent(event) {
            if (!this.isTouch) {
                if (event.type == 'mousedown') {
                    this.activeFrom(event);
                } else if (event.type == 'mouseup') {
                    this.activeTo(event);
                }
            }
        },
        handlerTouchStartEvent(event) {
            this.activeFrom(event);
            this.isTouch = true;
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
                onmouseenter: this.hoverFrom,
                onmouseleave: this.hoverTo,
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
