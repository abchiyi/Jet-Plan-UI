<script>
const NAME = 'j-slider';
import { h } from 'vue';
import { getOffset } from '../tool/lib/dom';
import { TimedActionLimit } from '../tool/lib';
import { bubble } from '../bubble';
function touchEventCompatible(event) {
    if (event.type.indexOf('touch') != -1) {
        return event.touches[0];
    }
    return event;
}
export default {
    name: NAME,
    mounted() {
        this.thumbSize = getOffset(this.$refs.thumb.$el);
        this.nowPosition = this.thumbSize.elWidth / 2;
        this.updateModelValuePercentage(this.modelValue);
        this.TAL.setCooledAlarm(() => {
            this.transitionOn();
        });
        this.TAL.setOverheatAlarm(() => {
            // setTimeout(() => {
            this.transitionOff();
            // }, 400);
        });
    },
    data() {
        return {
            nowPosition: undefined,
            thumbSize: undefined,
            useTransition: true,
            value: 0,
            percentage: undefined,
            TAL: new TimedActionLimit(5, 2),
        };
    },
    props: {
        modelValue: {
            type: [Number, String],
            required: true,
        },
        min: {
            type: [Number, String],
            default: 0,
        },
        max: {
            type: [Number, String],
            default: 100,
        },
        step: {
            type: [Number, String],
            default: 0.1,
        },
        disabled: {
            type: Boolean,
            default: false,
        },
    },
    methods: {
        trackStart(event) {
            if (this.disabled) return;
            this.transitionOn();
            this.updatePosition(touchEventCompatible(event));
        },
        trackMove(event) {
            this.transitionOff();
            this.updatePosition(touchEventCompatible(event));
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
            this.TAL.reSetConter();
        },
        updatePosition(event) {
            this.percentage = this.updateClickPositionPercentage(event);
        },
        updateClickPositionPercentage(event) {
            const { $el } = this;
            const elSize = getOffset($el);
            // 计算点击位置相对于滑动条百分比&限位
            const cpp = (event.pageX - elSize.size.left) / elSize.elWidth;
            let percentage = cpp > 1 ? 1 : cpp < 0 ? 0 : cpp;
            return percentage;
        },
        updateModelValuePercentage(modelValue) {
            const { max, min } = this;
            let percentage = modelValue / (max - min);
            percentage = percentage > 1 ? 1 : percentage < 0 ? 0 : percentage;
            this.percentage = percentage;
        },
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
        updateValue() {
            const { max, min, step } = this;
            let value = this.percentage * (max - min);
            value = Math.round(value / step) * step + min;
            value = parseFloat(value.toFixed(5));
            value = value > max ? max : value < min ? min : value;
            this.value = value;
        },
        transitionOn() {
            this.useTransition = true;
        },
        transitionOff() {
            this.useTransition = false;
        },
        handleMouseDown(event) {
            document.addEventListener('mousemove', this.transitionOff);
            document.addEventListener('mousemove', this.trackMove);
            document.addEventListener('mouseup', this.trackEnd);
            this.trackStart(event);
        },
        handleTouchStart(event) {
            document.addEventListener('touchmove', this.transitionOff);
            document.addEventListener('touchmove', this.trackMove);
            document.addEventListener('touchend', this.trackEnd);
            document.addEventListener('touchcancel', this.trackEnd);
            event.preventDefault();
            this.trackStart(event);
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
            this.value = v;
            this.updateModelValuePercentage(this.modelValue);
            this.TAL.action(() => {});
        },
    },
    render() {
        const INPUT = h('input', {
            type: 'hidden',
            value: this.value,
        });
        const THUMB = h(
            bubble,
            {
                class: 'thumb-shell',
                ref: 'thumb',

                position: 'top',
                message: this.value,
            },
            {
                default() {
                    return h('div', { class: 'thumb' });
                },
            }
        );
        const TRACK = h(
            'div',
            {
                class: ['track', ...this.classTrack],
            },
            THUMB
        );
        return h(
            'div',
            {
                style: this.style,
                class: [NAME, ...this.classes],
                onmousedown: this.handleMouseDown,
                ontouchstart: this.handleTouchStart,
            },
            [TRACK, INPUT]
        );
    },
};
</script>

<style>
@supports (-webkit-tap-highlight-color: #ffffff00) {
    .j-slider {
        -webkit-tap-highlight-color: #ffffff00;
    }
}
.j-slider {
    background-color: var(--border);
    border-radius: 0.5rem;
    position: relative;
    user-select: none;
    margin: 0.8rem 0;
    cursor: pointer;
    height: 0.5rem;
    width: 200px;
}
.j-slider.disabled {
    cursor: not-allowed;
}

.j-slider .track {
    background-color: var(--primary);
    width: var(--track-fill-width);
    border-radius: 0.5rem;
    user-select: none;
    height: 0.5rem;
    transform: translate3d(0, 0, 0);
}
.j-slider.disabled .track {
    background-color: var(--disabled);
}

.j-slider .thumb-shell {
    right: calc(-100% + 0.5rem);
    position: relative;
    top: -0.25rem;
    height: 1rem;
    width: 1rem;
}
.j-slider .thumb {
    border: solid 3.5px var(--foreground);
    background-color: var(--border);
    box-sizing: border-box;
    border-radius: 1rem;
    height: 1rem;
    width: 1rem;
}
.j-slider.disabled .thumb {
    border: solid 3.5px var(--disabled);
    /* background-color: var(--border); */
}

/* 过渡动画 */
.j-slider .track {
    transition: 0.4s var(--ease-out);
}
.j-slider .track.move {
    transition: unset;
}
</style>
