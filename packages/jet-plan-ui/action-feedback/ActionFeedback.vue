<script>
function propInit(_type, _default = false) {
    return {
        type: _type || Boolean,
        default: _default,
    };
}
function propColor(defaultColor) {
    return propInit(String, defaultColor);
}
import mask from './ActionFeedbackMask.vue';
import { h, TransitionGroup } from 'vue';
export default {
    name: 'j-action-feedback',
    props: {
        opacity: propInit(String, '0.5'),
        tag: propInit(String, 'div'),
        active: propInit(),
        hover: propInit(),
        focusOutline: propInit(),
        focus: propInit(),

        // custom color
        colorFocusOutline: propColor('var(--border)'),
        colorActive: propColor('var(--mask)'),
        colorFocus: propColor('var(--mask)'),
        colorHover: propColor('var(--mask)'),
    },
    data() {
        return {
            hoverOnTouch: false,
            data_active: this.active,
            data_hover: true,
            data_touch: false,
            masks: [],
            key: 0,
        };
    },
    computed: {
        classes() {
            return [
                this.hover && this.data_hover ? 'hover' : '',
                this.focusOutline ? 'focus-outline' : '',
                this.focus ? 'focus' : '',
            ];
        },
        styles() {
            return {
                '--color-focus-out-line': this.colorFocusOutline,
                '--color-focus': this.colorFocus,
                '--color-hover': this.colorHover,
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
                    color:
                        this.hoverOnTouch && !this.active
                            ? 'var(--color-hover)'
                            : this.colorActive,
                    event: event,
                },
                key: this.key++,
            };
        },
        removeMask() {
            this.masks.forEach((item, index, masks) => {
                if (item.key != this.key) {
                    masks.splice(index, 1);
                }
            });
        },
        // Hover
        enter() {
            if (this.hover && !this.data_touch) this.data_hover = true;
            // 移动端触摸事件响应 hover 非常缓慢，主动切换 active 反馈
            if (this.hover && this.data_touch) {
                this.hoverOnTouch = true;
            }
        },
        leave() {
            this.removeMask();
        },
        // Click
        startClick(event) {
            if (this.data_active) {
                if (event.button === 0 && !this.ignoreClick) {
                    this.masks.push(this.createMask(event));
                }
                if (this.ignoreClick) this.ignoreClick = false;
            }
        },
        endClick() {
            this.removeMask();
        },
        // Touch
        startTouche(event) {
            // XXX data_touch 不能设置为 false 未知的影响
            this.data_touch = true;
            this.enter();

            // Ripple
            if (event.touches && this.data_active) {
                this.masks.push(this.createMask(event.touches[0]));
                // 触发"touche"事件时会在之后触发"click"事件
                // 此变量改变下一次"click"回调函数的运行结果
                this.ignoreClick = true;
            }
        },
        endTouche() {
            this.leave();
            this.removeMask();
        },
    },
    watch: {
        active(v) {
            if (this.hoverOnTouch) {
                this.data_active = true;
            } else {
                this.data_active = v;
            }
        },
        hover(v) {
            if (!v && this.hoverOnTouch) {
                this.data_active = this.active;
                this.hoverOnTouch = false;
            }
        },
        hoverOnTouch(v) {
            if (v) {
                this.data_active = true;
                this.data_hover = false;
            }
        },
    },
    render() {
        return h(
            this.tag,
            {
                class: ['j-action-feedback', ...this.classes],
                style: this.styles,
                onmousedown: this.startClick,
                onmouseup: this.endClick,

                onmouseenter: this.enter,
                onmouseleave: this.leave,

                ontouchstart: this.startTouche,
                ontouchcancel: this.endTouche,
                ontouchend: this.endTouche,
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
    transition: opacity 0.3s var(--ease-out-slow);
    background-color: var(--color-hover);
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
.j-action-feedback.focus-outline:focus {
    transition: 0.3s var(--ease-out);
    outline: solid 3px var(--color-focus-out-line);
}

/* Keyboard focus */
.j-action-feedback.focus:focus::after {
    background-color: var(--color-focus);
    opacity: 0.5;
}
/* Mouse hover */
.j-action-feedback.hover:hover::after {
    background-color: var(--color-hover);
    opacity: 0.5;
}
.j-action-feedback.focus:focus::after,
.j-action-feedback.hover:hover::after {
    opacity: 0.5;
}

@supports (-webkit-tap-highlight-color: #ffffff00) {
    .j-action-feedback {
        -webkit-tap-highlight-color: #ffffff00;
    }
}
</style>
