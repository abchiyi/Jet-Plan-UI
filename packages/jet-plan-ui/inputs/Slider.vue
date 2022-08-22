<script>
const NAME = 'j-slider';
import { h } from 'vue';
import { getOffset, shadowPainter } from '../tool/lib/dom';
import { TimedActionLimit } from '../tool/lib';
function touchEventCompatible(event) {
    if (event.type.indexOf('touch') != -1) {
        return event.touches[0];
    }
    return event;
}
export default {
    name: NAME,
    mounted() {
        // 计算拨杆尺寸，设置限位
        this.thumbSize = getOffset(this.$refs.thumb);
        this.nowPosition = this.thumbSize.elWidth / 2;

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
            thumbSize: undefined,
            useTransition: true,
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
            type: [Number],
            default: 0.1,
        },
        disabled: {
            type: Boolean,
            default: false,
        },
    },
    methods: {
        debug() {
            const { max, min, step } = this;
            console.log(`Min:${min},Max:${max},Step:${step}`);
            console.log(`Range:${max - min}`);
            console.log(this.percentage * 100 + '%');
            console.log(this.value);
        },

        // Calc
        positionToPercentage(event) {
            const elSize = getOffset(this.$refs.track);
            // 计算点击位置相对于滑动条百分比&限位
            const cpp = (event.pageX - elSize.size.left) / elSize.elWidth;
            this.percentage = cpp > 1 ? 1 : cpp < 0 ? 0 : cpp;
        },
        valueToPercentage(modelValue) {
            const { max, min } = this;
            const range = max - min;
            let percentage = modelValue / range - min / range;
            percentage = percentage > 1 ? 1 : percentage < 0 ? 0 : percentage;
            this.percentage = percentage;
        },
        updateValue() {
            const { max, min, step } = this;
            let value = this.percentage * (max - min) + min;
            value = Math.round(value / step) * step + 0 * min;
            value = parseFloat(value.toFixed(5));
            value = value > max ? max : value < min ? min : value;
            this.value = value;
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
        },
        trackMove(event) {
            this.transitionOff();
            this.positionToPercentage(touchEventCompatible(event));
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
        },

        // Style
        updateThumbPosition() {
            const { $el } = this;
            const elSize = getOffset($el);
            // 滑动条两端限位，避免拨杆超出边界
            const thumbRadius = this.thumbSize.elWidth / 2;
            const MAX = elSize.elWidth - thumbRadius;
            const MIN = thumbRadius;
            //计算拨杆当前位置
            let x = elSize.elWidth * this.percentage;
            this.nowPosition = x < MIN ? MIN : x > MAX ? MAX : x;
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
    watch: {
        percentage() {
            this.updateThumbPosition();
            this.updateValue();
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
        const THUMB = h(
            'div',
            {
                class: 'thumb-shell',
                ref: 'thumb',

                position: 'top',
                message: this.value,
            },
            h('div', {
                class: 'thumb',
                style: {
                    boxShadow: shadowPainter('bottom', 3),
                },
            })
        );
        const MASK = h(
            'div',
            { class: ['background'] },
            h(
                'div',
                {
                    class: ['mask', ...this.classTrack],
                },
                THUMB
            )
        );

        const TRACK = h('div', { class: ['track'], ref: 'track' });
        return h(
            'div',
            {
                style: this.style,
                class: [NAME, 'shell', ...this.classes],
                onmousedown: this.handleMouseDown,
                ontouchstart: this.handleTouchStart,
            },
            [INPUT, MASK, TRACK]
        );
    },
};
</script>

<style>
/* VALUES */
.j-slider {
    --HEIGHT: 0.25rem;
    --BORDER-WIDTH: 0.125rem;
    --THUMB-DIAMETER: 0.75rem;
    --THUMB-RADIUS: calc(var(--THUMB-DIAMETER) / 2);
}

.j-slider {
    cursor: pointer;
}

/* BORDER */
.j-slider .thumb,
.j-slider .background {
    outline: solid var(--BORDER-WIDTH);
}

.j-slider > * {
    user-select: none;
}

.j-slider.shell {
    display: inline-block;
    position: relative;
    width: 200px;
}

.j-slider .mask,
.j-slider .thumb {
    pointer-events: unset;
}

.j-slider .background {
    background-color: var(--border-dark);
    border-radius: var(--HEIGHT);
    height: var(--HEIGHT);
    position: relative;
}

.j-slider .mask {
    background-color: var(--primary);
    transform: translate3d(0, 0, 0);
    width: var(--track-fill-width);
    border-radius: var(--HEIGHT);
    height: var(--HEIGHT);
    position: absolute;
}

.j-slider .thumb-shell {
    top: calc((var(--THUMB-DIAMETER) - var(--HEIGHT)) / 2 * -1);
    right: calc(-100% + var(--THUMB-DIAMETER) / 2);
    height: var(--THUMB-DIAMETER);
    width: var(--THUMB-DIAMETER);
    position: relative;
}
.j-slider .thumb {
    border-radius: var(--THUMB-DIAMETER);
    background-color: var(--white);
    height: var(--THUMB-DIAMETER);
    width: var(--THUMB-DIAMETER);
}

/* TRACK 用于追踪点击&滑动位置以计算百分比,
 *避免使用 '.shell' 进行追踪造成的空位滑动
 **/
.j-slider .track {
    right: var(--THUMB-RADIUS);
    left: var(--THUMB-RADIUS);
    height: var(--HEIGHT);
    position: absolute;
    top: 0;
}

/* ----- animation ----- */

.j-slider .mask {
    transition: width 0.4s var(--ease-out);
}
.j-slider .mask.move {
    transition: unset;
}

/* ----- colors ----- */

/* default */
.j-slider .background {
    background-color: var(--border-dark);
    outline-color: var(--border);
}
.j-slider .thumb {
    outline-color: var(--border);
}

/* disabled */
.j-slider.disabled {
    cursor: not-allowed;
}
.j-slider.disabled .background {
    outline-color: var(--border-light);
    background-color: var(--border);
}
.j-slider.disabled .mask {
    background-color: var(--border-dark);
}

.j-slider.disabled .thumb {
    outline-color: var(--border-light);
}
</style>
