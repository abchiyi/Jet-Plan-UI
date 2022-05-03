<script>
import { propInit, propInitBoolean } from '../tool/lib';
function propColor(defaultColor) {
    return propInit(String, defaultColor);
}
import baseAction from './baseAction.vue';
import mask from './ActionFeedbackMask.vue';
import { h, TransitionGroup } from 'vue';
export default {
    name: 'j-action-feedback',
    props: {
        focus: propInitBoolean(false),
        hover: propInitBoolean(false),
        active: propInitBoolean(false),
        opacity: propInit([String, Number], 0.5),

        // custom color
        colorActive: propColor('var(--mask)'),
        colorFocus: propColor('var(--mask)'),
        colorHover: propColor('var(--mask)'),
    },
    data() {
        return {
            data_hover: false,
            data_focus: false,
            masks: [],
            key: 0,
        };
    },
    computed: {
        classes() {
            return [
                this.data_hover && this.hover ? 'hover' : '',
                this.data_focus && this.focus ? 'focus' : '',
            ];
        },
        styles() {
            return {
                '--color-focus': this.colorFocus,
                '--color-hover': this.colorHover,
                '--mask-opacity': this.opacity,
            };
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
                    color: this.colorActive,
                    event: event,
                },
                key: this.key++,
            };
        },
        removeMask() {
            this.masks = [];
        },
        // Hover
        enter() {
            if (this.hover) this.data_hover = true;
        },
        leave() {
            this.data_hover = false;
        },
        // Click & touch
        startClick(event) {
            if (this.active && (event.button === 0 || event.touches)) {
                this.masks.push(this.createMask(event));
            }
        },
        endClick() {
            this.removeMask();
        },

        handlerFocus() {
            this.data_focus = true;
        },
        handlerFocusTo() {
            this.data_focus = false;
        },
    },
    render() {
        return h(
            baseAction,
            {
                class: ['j-action-feedback', ...this.classes],
                style: this.styles,

                onActive_from: this.startClick,
                onActive_to: this.endClick,

                onHover_from: this.enter,
                onHover_to: this.leave,

                onFocus_from: this.handlerFocus,
                onFocus_to: this.handlerFocusTo,

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

.j-action-feedback::after {
    transition: 0.3s var(--ease-out);
    /* background-color: var(--color-hover); */
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
/* .j-action-feedback.focus.focus-outline {
    outline: solid 3px var(--color-focus-out-line);
} */

/* Keyboard focus */
.j-action-feedback.focus::after {
    background-color: var(--color-focus);
}
/* Mouse hover */
.j-action-feedback.hover::after {
    background-color: var(--color-hover);
}
.j-action-feedback.focus::after,
.j-action-feedback.hover::after {
    opacity: var(--mask-opacity);
}

@supports (-webkit-tap-highlight-color: #ffffff00) {
    .j-action-feedback {
        -webkit-tap-highlight-color: #ffffff00;
    }
}
</style>
