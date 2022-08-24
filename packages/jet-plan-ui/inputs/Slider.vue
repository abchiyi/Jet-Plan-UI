<script>
const NAME = 'j-slider';
import { h } from 'vue';
import { getOffset } from '../tool/lib/dom';
import { TimedActionLimit, propInitBoolean } from '../tool/lib';
import { Row } from '../gird';
import { Bubble } from '../bubble';
function touchEventCompatible(event) {
    if (event.type.indexOf('touch') != -1) {
        return event.touches[0];
    }
    return event;
}
export default {
    name: NAME,
    mounted() {
        // 计算默认值保证初始加载时拨杆处于正确位置
        this.valueToPercentage(this.modelValue);

        // 设置动画启停模式
        this.TAL.setCooledAlarm(() => {
            this.transitionOn();
        });
        this.TAL.setOverheatAlarm(() => {
            this.transitionOff();
            clearTimeout(this.timeOutID);
        });
    },
    data() {
        return {
            nowPosition: undefined,
            useTransition: true,
            thumbSize: 0,
            value: 0,
            percentage: undefined,
            TAL: new TimedActionLimit(100, 2),
        };
    },
    props: {
        modelValue: {
            type: [Number],
            required: true,
        },
        min: {
            type: [Number],
            default: 0,
        },
        max: {
            type: [Number],
            default: 100,
        },
        step: {
            type: [Number, Array],
            default: 0.1,
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        bubble: propInitBoolean(false),
    },
    methods: {
        debug() {
            const { max, min, step } = this;
            console.log(`Min:${min},Max:${max},Step:${step}`);
            console.log(`Range:${max - min}`);
            console.log(this.percentage * 100 + '%');
            console.log(this.value);
        },
        getValue() {
            /**
             * @desc 兼容指定步长模式
             */
            if (this.step instanceof Array) {
                const MAX =
                    this.step.length > 1
                        ? this.step[this.step.length - 1]
                        : this.max;

                return {
                    step: 0.1,
                    max: MAX,
                    min: this.step[0],
                };
            }

            return this;
        },

        // Calc
        positionToPercentage(event) {
            const elSize = getOffset(this.$el);
            // 计算点击位置相对于滑动条百分比&限位
            const cpp = (event.pageX - elSize.size.left) / elSize.elWidth;
            this.percentage = cpp > 1 ? 1 : cpp < 0 ? 0 : cpp;
        },
        valueToPercentage(modelValue) {
            this.percentage = this.__valueToPercentage(modelValue);
        },
        __valueToPercentage(value) {
            const { max, min } = this.getValue();
            const range = max - min;
            let percentage = value / range - min / range;
            percentage = percentage > 1 ? 1 : percentage < 0 ? 0 : percentage;
            return percentage;
        },
        updateValue() {
            const { max, min, step } = this.getValue();

            // XXX
            function findCloseNum(arr, num) {
                var index = 0; // 保存最接近数值在数组中的索引
                var d_value = Number.MAX_VALUE; // 保存差值绝对值，默认为最大数值

                for (var i = 0; i < arr.length; i++) {
                    var new_d_value = Math.abs(arr[i] - num); // 新差值
                    if (new_d_value <= d_value) {
                        // 如果新差值绝对值小于等于旧差值绝对值，保存新差值绝对值和索引
                        if (new_d_value === d_value && arr[i] < arr[index]) {
                            // 如果数组中两个数值跟目标数值差值一样，取大
                            continue;
                        }
                        index = i;
                        d_value = new_d_value;
                    }
                }

                return arr[index]; // 返回最接近的数值
            }

            let value = this.percentage * (max - min) + min;
            value = Math.round(value / step) * step + 0 * min;
            value = parseFloat(value.toFixed(5));
            value = value > max ? max : value < min ? min : value;

            if (this.step instanceof Array) {
                const targetNum = findCloseNum(this.step, value);
                targetNum;
                switch (true) {
                    // 等于最小值时
                    case value == this.step[0]:
                        this.value = this.step[0];
                        break;

                    default:
                        this.value = targetNum;
                        break;
                }
            } else {
                this.value = value;
            }
        },

        // Style
        updateThumbPosition() {
            const elSize = getOffset(this.$refs.background);
            // 滑动条两端限位，避免拨杆超出边界, 并隐藏两端
            let MAX = elSize.elWidth;
            let MIN = 0;
            //计算拨杆当前位置
            let x = elSize.elWidth * this.percentage;
            this.nowPosition = x < MIN ? MIN : x > MAX ? MAX : x;
        },

        // Logic
        transitionOn() {
            this.useTransition = true;
        },
        transitionOff() {
            this.useTransition = false;
        },
        handleMouseDown(event) {
            if (this.disabled) return;
            document.addEventListener('mousemove', this.transitionOff);
            document.addEventListener('mousemove', this.trackMove);
            document.addEventListener('mouseup', this.trackEnd);
            this.trackStart(event);
        },
        handleTouchStart(event) {
            if (this.disabled) return;
            document.addEventListener('touchmove', this.transitionOff);
            document.addEventListener('touchmove', this.trackMove);
            document.addEventListener('touchend', this.trackEnd);
            document.addEventListener('touchcancel', this.trackEnd);
            event.preventDefault();
            this.trackStart(event);
        },
        trackStart(event) {
            this.transitionOn();
            this.positionToPercentage(touchEventCompatible(event));

            this.$emit('ontrack-start', this);
        },
        trackMove(event) {
            this.transitionOff();
            this.positionToPercentage(touchEventCompatible(event));

            this.$emit('ontrack-move', this);
        },
        trackEnd() {
            document.removeEventListener('mousemove', this.transitionOff);
            document.removeEventListener('mousemove', this.trackMove);
            document.removeEventListener('mouseup', this.trackEnd);

            document.removeEventListener('touchmove', this.transitionOff);
            document.removeEventListener('touchmove', this.trackMove);
            document.removeEventListener('touchend', this.trackEnd);
            document.removeEventListener('touchcancel', this.trackEnd);
            this.transitionOn();
            // this.TAL.reSetConter();

            // 追踪结束时根据绑定值计算最后位置
            this.valueToPercentage(this.modelValue);

            this.$emit('ontrack-end', this);
        },
    },
    computed: {
        style() {
            return {
                '--track-fill-width': this.nowPosition + 'px',
            };
        },
        classTrack() {
            return [!this.useTransition ? 'move' : ''];
        },
        classes() {
            return [this.disabled ? 'disabled' : ''];
        },
    },
    emits: [
        'update:modelValue',
        'percentage',
        'ontrack-start',
        'ontrack-move',
        'ontrack-end',
    ],
    watch: {
        percentage(v) {
            this.updateThumbPosition();
            this.updateValue();
            this.$emit('percentage', v * 100 + '%');
        },
        value(v) {
            this.$emit('update:modelValue', v);
        },
        modelValue(v) {
            if (v != this.value) this.valueToPercentage(this.modelValue);
            this.TAL.action(() => {});
            this.timeOutID = setTimeout(() => {
                this.TAL.reSetConter();
            }, 50);
        },
    },
    render() {
        const INPUT = h('input', {
            type: 'hidden',
            value: this.value,
        });

        const BACKGROUND = h(
            'div',
            { class: ['background'] },

            // Slider
            h('div', {
                class: ['slider', ...this.classTrack],
            })
        );

        const BUBBLE_SHELL = h(
            'div',
            { class: ['bubble-shell'], ref: 'track' },
            [
                h(Bubble, {
                    class: 'bubble-anchor',
                    show: this.bubble && !this.useTransition,
                    message: this.value,
                    position: 'top',
                }),
            ]
        );

        const SLOT_CONTENT = h(
            Row,
            {
                class: ['slot-content'],
                ref: 'track',
                Y: 'center',
            },

            {
                default: () => {
                    if (this.$slots.default) {
                        return this.$slots.default();
                    }
                },
            }
        );
        return h(
            'div',
            {
                class: [NAME, ...this.classes],
                ontouchstart: this.handleTouchStart,
                onmousedown: this.handleMouseDown,
                style: this.style,
                ref: 'background',
            },
            [INPUT, BACKGROUND, BUBBLE_SHELL, SLOT_CONTENT]
        );
    },
};
</script>

<style>
/* VALUES */
.j-slider {
    --HEIGHT: 1em;
    --THUMB-DIAMETER: calc(1.4 * var(--HEIGHT));
    --THUMB-RADIUS: calc(var(--THUMB-DIAMETER) / 2);
}

.j-slider > * {
    user-select: none;
}

.j-slider {
    display: inline-block;
    position: relative;
    cursor: pointer;
    width: 200px;
}

/* ----- Bubble ----- */
.j-slider .slot-content,
.j-slider .bubble-shell {
    height: var(--HEIGHT);
    position: absolute;
    right: 0;
    left: 0;
    top: 0;
}

.j-slider .bubble-anchor {
    transform: translateX(var(--track-fill-width));
    height: var(--HEIGHT);
}

.j-slider .j-bubble .j-row {
    height: var(--HEIGHT);
}

.j-slider .slider {
    pointer-events: unset;
}

.j-slider .slot-content {
    color: var(--text-light);
    padding: 0 0.3em;
}

.j-slider .background {
    background-color: var(--border-dark);
    border-radius: var(--HEIGHT);
    height: var(--HEIGHT);
    position: relative;
    overflow: hidden;
}

.j-slider .slider {
    background-color: var(--primary);
    transform: translate3d(0, 0, 0);
    width: var(--track-fill-width);
    height: var(--HEIGHT);
    position: absolute;
}
/* ----- animation ----- */

.j-slider .bubble-anchor,
.j-slider .slider {
    transition: width 0.4s var(--ease-out);
}
.j-slider .slider.move {
    transition: unset;
}

/* ----- colors ----- */

/* default */
.j-slider .background {
    background-color: var(--border-dark);
    outline-color: var(--border);
}

/* disabled */
.j-slider.disabled {
    color: var(--text-disabled);
    cursor: not-allowed;
}
.j-slider.disabled .background {
    outline-color: var(--border-light);
    background-color: var(--border);
}
.j-slider.disabled .slider {
    background-color: var(--border-dark);
}
</style>
