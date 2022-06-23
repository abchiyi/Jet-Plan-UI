<script>
const NAME = 'j-slider';
import { h } from 'vue';
// import BaseAction from '../action-feedback/baseAction.vue';
import { getOffset } from '../tool/lib/dom';
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
    },
    data() {
        return {
            nowPosition: undefined,
            thumbSize: undefined,
            useTransition: true,
            value: 0,
            percentage: undefined,
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
    },
    methods: {
        trackStart(event) {
            this.transitionOn();
            this.updatePosition(touchEventCompatible(event));
        },
        trackMove(event) {
            this.preventScroll(true);
            this.transitionOff();
            this.updatePosition(touchEventCompatible(event));
        },
        trackEnd() {
            this.preventScroll(false);
            this.oldOverflow = undefined;
            document.removeEventListener('mousemove', this.trackMove);
            document.removeEventListener('mouseup', this.trackEnd);
            document.removeEventListener('touchmove', this.transitionOff);
            document.removeEventListener('touchmove', this.trackMove);
            document.removeEventListener('touchend', this.trackEnd);
            document.removeEventListener('touchcancel', this.trackEnd);
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
            this.trackStart(event);
        },
        preventScroll(bool) {
            if (this.oldOverflow == undefined) {
                this.oldOverflow = document.body.style.overflow;
            }
            document.body.style.overflow = bool ? 'hidden' : this.oldOverflow;
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
            this.updateModelValuePercentage(v);
            this.value = v;
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
                class: [NAME],

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
.track {
    background-color: var(--primary);
    width: var(--track-fill-width);
    border-radius: 0.5rem;
    user-select: none;
    height: 0.5rem;
}
.thumb-shell {
    right: calc(-100% + 0.5rem);
    position: relative;
    top: -0.25rem;
    height: 1rem;
    width: 1rem;
}
.thumb {
    border: solid 3.5px var(--foreground);
    background-color: var(--border);
    box-sizing: border-box;
    border-radius: 1rem;
    height: 1rem;
    width: 1rem;
}

/* 过渡动画 */
.track {
    transition: 0.4s var(--ease-out);
}
.track.move {
    transition: unset;
}
</style>
