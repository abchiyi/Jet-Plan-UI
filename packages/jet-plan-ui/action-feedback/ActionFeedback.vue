<script>
// TODO 修正 'TAB' 按键 选中时的样式应用问题
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
        hoverDelay: propInit(Number, 80),
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
                    opacity: 1,
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
            if (this.hover) {
                if (event.active) {
                    this.$hover_timeout_id = setTimeout(() => {
                        this.data_hover = true;
                    }, this.hoverDelay);
                } else {
                    clearTimeout(this.$hover_timeout_id);
                    this.data_hover = false;
                }
            }
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
    transition: outline 0.2s var(--ease-out);
    position: relative;
    overflow: hidden;
    outline: unset;
}

.j-action-feedback::after {
    transition: 0.2s var(--ease-out-slow);
}

.j-action-feedback::after {
    pointer-events: none;
    position: absolute;
    content: '';
    bottom: 0;
    right: 0;
    left: 0;
    top: 0;
}

/* Keyboard focus */
.j-action-feedback.focus {
    outline: 2px solid var(--info);
}
/* Mouse hover */
.j-action-feedback.hover::after {
    background-color: var(--mask);
}
</style>
