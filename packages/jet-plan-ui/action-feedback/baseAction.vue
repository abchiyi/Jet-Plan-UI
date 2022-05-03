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
                ontouchstart: this.activeFrom,
                ontouchcancel: this.activeTo,
                ontouchend: this.activeTo,
            },
        };
    },
    emits: ['active_from', 'active_to'],
    methods: {
        activeFrom() {
            this.$emit('active_from');
        },
        activeTo() {
            this.$emit('active_to');
        },
    },
    render() {
        return h(
            this.tag,
            {
                class: [name, ...this.class],
                // Mouse
                onmousedown: this.activeFrom,
                onmouseup: this.activeTo,
                // Touch
                ...this.onTouch,
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
