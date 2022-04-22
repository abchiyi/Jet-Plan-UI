<script>
function propInit(_type, _default) {
    return {
        type: _type || Boolean,
        default: _default || false,
    };
}
import mask from './ActionFeedbackMask.vue';
import { h, TransitionGroup } from 'vue';
export default {
    name: 'j-action-feedback',
    props: {
        // TODO 验证色彩字符串是否合法
        color: propInit(String, 'var(--mask)'),
        // TODO 或者透明度曲线
        opacity: propInit(String, '0.5'),
        tag: propInit(String, 'div'),
        active: propInit(),
        hover: propInit(),
        focusOutline: propInit(),
        focus: propInit(),
    },
    data() {
        return {
            data_active: this.active,
            data_hover: false,
            data_touch: false,
            masks: [],
            key: 0,
        };
    },
    computed: {
        classes() {
            return [
                'j-action-feedback',
                this.hover && this.data_hover ? 'hover' : '',
                this.focus ? 'focus' : '',
                this.focusOutline ? 'focus-outline' : '',
            ];
        },
    },
    methods: {
        createMask(event) {
            return {
                data: {
                    opacity: this.opacity,
                    el: this.$refs.self,
                    color: this.color,
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
        render() {
            return [this.renderDefault(), this.renderMask()];
        },
        // Hover
        enter() {
            if (this.hover && !this.data_touch) this.data_hover = true;
            // 移动端触摸事件响应 hover 非常缓慢，主动切换 active 反馈
            if (this.hover && this.data_touch) {
                this.data_hover = false;
                this.data_active = true;
            }
        },
        leave() {
            if (this.hover) this.data_hover = false;
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
            this.data_active = v;
        },
    },
    render() {
        return h(
            this.tag,
            {
                class: this.classes,
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
                default: this.render,
            }
        );
    },
};
</script>
<style>
.j-action-feedback {
    transition: background-color 0.3s var(--ease-out-slow) !important;
    outline: solid 3px #00000000;
    position: relative;
    transition: unset;
    overflow: hidden;
}

/* Keyboard focus */
.j-action-feedback.focus-outline:focus {
    outline: solid 3px var(--border);
}

/* focus */
.j-action-feedback.focus:focus,
/* Hover */
.j-action-feedback.hover:hover {
    background-color: var(--border);
}

@supports (-webkit-tap-highlight-color: #ffffff00) {
    .j-action-feedback {
        -webkit-tap-highlight-color: #ffffff00;
    }
}
</style>
