<script>
import { propInit, propInitBoolean } from '../tool/lib';
import baseAction from './baseAction.vue';
import mask from './ActionFeedbackMask.vue';
import { h, TransitionGroup } from 'vue';
export default {
    name: 'j-action-feedback',
    props: {
        name: propInit(String, 'j'),
        focus: propInitBoolean(false),
        hover: propInitBoolean(false),
        active: propInitBoolean(false),
    },
    data() {
        return {
            data_active: false,
            data_hover: false,
            data_focus: false,
            masks: [],
            key: 0,
        };
    },
    computed: {
        classes() {
            return [
                `${this.name}-action-feedback`,
                this.data_hover && this.hover ? 'hover' : '',
                this.data_focus && this.focus ? 'focus' : '',
                this.data_active && this.active ? 'active' : '',
            ];
        },
        // Render
        renderDefault() {
            const slot = this.$slots.default;
            if (slot) {
                return slot();
            }
            return 'Submit';
        },
        renderMask() {
            let key = 0;
            return h(
                TransitionGroup,
                { name: 'mask' },
                {
                    default: () =>
                        this.masks.map((attrs) => {
                            return h(mask, {
                                data: attrs.data,
                                key: key++,
                            });
                        }),
                }
            );
        },
    },
    methods: {
        createMask(event) {
            return {
                data: {
                    opacity: this.opacity,
                    el: this.$refs.self,
                    color: 'var(--mask)',
                    event: event,
                },
                key: this.key++,
            };
        },
        removeMask() {
            this.masks = [];
        },
        handlerFocus(event) {
            if (this.focus) {
                this.data_focus = event.active;
            }
        },
        handlerActive(event) {
            if (event.active) {
                // 遮罩在自定义类名中不启用
                if (this.name == 'j') {
                    let e = event.event;
                    if (this.active && (e.button === 0 || e.touches)) {
                        this.masks.push(this.createMask(e));
                    }
                }
            } else {
                this.removeMask();
            }

            this.data_active = event.active;
        },
        handlerHover(event) {
            if (this.hover) this.data_hover = event.active;
        },
    },
    render() {
        return h(
            baseAction,
            {
                class: [...this.classes],

                onActive_from: this.handlerActive,
                onActive_to: this.handlerActive,

                onHover_from: this.handlerHover,
                onHover_to: this.handlerHover,

                onFocus_from: this.handlerFocus,
                onFocus_to: this.handlerFocus,

                ref: 'self',
            },
            {
                default: () => [this.renderDefault, this.renderMask],
            }
        );
    },
};
</script>
<style>
.j-action-feedback {
    outline: solid 3px #00000000;
    position: relative;
    transition: unset;
    overflow: hidden;
}

.j-action-feedback,
.j-action-feedback::after {
    transition: 0.3s var(--ease-out-slow);
}

.j-action-feedback::after {
    pointer-events: none;
    position: absolute;
    content: '';
    opacity: 0;
    bottom: 0;
    right: 0;
    left: 0;
    top: 0;
}

/* Keyboard focus */
.j-action-feedback.focus::after {
    background-color: var(--mask);
}
/* Mouse hover */
.j-action-feedback.hover::after {
    background-color: var(--mask);
}
.j-action-feedback.focus::after,
.j-action-feedback.hover::after {
    opacity: 0.5;
}

@supports (-webkit-tap-highlight-color: #ffffff00) {
    .j-action-feedback {
        -webkit-tap-highlight-color: #ffffff00;
    }
}
</style>
