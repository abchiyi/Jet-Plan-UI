<script>
const NAME = 'j-slider'
import { h } from 'vue'
import { TrackBar } from "../baseComponents"
import { Bubble } from '../bubble'
import { getOffset, shadowPainter } from '../tool/lib/dom'
import { numericLimits, findCloseNum } from '../tool/lib'

export default {
    name: NAME,
    data () {
        return {
            percentage: 0,
            active: false,
        }
    },
    mounted () {
        let percentageOld = this.percentage
        this.percentage = percentageOld - 0.1

        this.valueToPercentage(this.modelValue)
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
    },
    methods: {
        // kef focus change
        inputChange (event) {
            const VALUE = event.target.value
            const VALUE_OLD = this.modelValue

            // 当指定步长序列时
            if (this.step instanceof Array) {
                const targetNum = findCloseNum(this.step, VALUE)
                const INDEX_NOW = this.step.indexOf(targetNum)
                const index = VALUE > VALUE_OLD ? INDEX_NOW + 1 : INDEX_NOW - 1
                this.$emit("update:modelValue",
                    this.step[
                    numericLimits(0, this.step.length - 1, index)
                    ]
                )
            } else {
                this.$emit("update:modelValue", VALUE * 1)
            }
        },
        // Calc
        valueToPercentage (modelValue) {
            this.percentage = this.__valueToPercentage(modelValue)
        },
        __valueToPercentage (value) {
            const { max, min } = this.args
            const range = max - min
            let percentage = value / range - min / range
            percentage = percentage > 1 ? 1 : percentage < 0 ? 0 : percentage
            return percentage
        },
        percentageToValue () {
            const { max, min, step } = this.args

            let value = this.percentage * (max - min) + min
            value = Math.round(value / step) * step
            value = parseFloat(value.toFixed(5))
            value = value > max ? max : value < min ? min : value

            if (this.step instanceof Array) {
                const targetNum = findCloseNum(this.step, value)
                this.$emit("update:modelValue", targetNum)
            } else {
                this.$emit("update:modelValue", value)
            }
        }
    },
    computed: {
        style () {
            return {
                '--thumb-position': this.thumbPosition,
            }
        },
        class () {
            return [
                this.disabled ? 'disabled' : ''
            ]
        },
        thumbPosition () {
            const SLIDER_WIDTH = getOffset(this.$refs.trackBar).elWidth
            const THUMB_DIAMETER = getOffset(this.$refs.thumb).elWidth
            const thumbRadius = THUMB_DIAMETER * 0.5
            const MIN = thumbRadius * -1
            const MAX = SLIDER_WIDTH + thumbRadius
            const thumb_position = SLIDER_WIDTH * this.percentage - thumbRadius
            return numericLimits(MIN, MAX, thumb_position) + 'px'
        },
        args () {
            /**
             * @desc 兼容指定步长模式
             */
            if (this.step instanceof Array) {
                const MAX =
                    this.step.length > 1
                        ? this.step[this.step.length - 1]
                        : this.max

                return {
                    step: 0.1,
                    max: MAX,
                    min: this.step[0],
                }
            }

            return this
        },
    },
    watch: {
        modelValue (v) {
            // 在交互过程中不使用 modelValue 来更新百分比值
            if (!this.active) this.valueToPercentage(v)
        },
        percentage () {
            this.percentageToValue()
        },
        active (v) {
            // 交互结束时重新计算百分比以更新拨杆位置
            if (!v) this.valueToPercentage(this.modelValue)
        }
    },
    emits: [
        'update:modelValue',
        'percentage',
    ],
    render () {
        const THUMB = h(Bubble, {
            class: 'thumb',
            style: {
                boxShadow: shadowPainter('bottom', 2)

            },

            message: this.modelValue,
            show: this.active,
            position: 'top',
            ref: 'thumb'
        })

        const TRACK_BAR = h(TrackBar, {
            ref: 'trackBar',

            disabled: this.disabled,

            percentage: this.percentage,
            "onUpdate:percentage": (v) => {
                this.percentage = v
            },
            onActive: v => this.active = v,
        }, {
            default: () => THUMB
        })

        const SLIDER_BACKGROUND = h(
            'div',
            {
                class: ['background'],
            },
            {
                default: () => [TRACK_BAR]
            }
        )

        const INPUT = h('input', {
            onChange: this.inputChange,
            class: ['input-hidden'],
            disabled: this.disabled,
            value: this.modelValue,

            step: this.args.step,
            max: this.args.max,
            min: this.args.min,

            id: this.$.uid,
            type: 'range',
        })
        const SLIDER_SHELL = h('label', {
            for: this.$.uid,
            class: ['slider-shell']
        }, SLIDER_BACKGROUND)


        return h('span', {
            class: [NAME, this.class],
            style: this.style,

        }, INPUT, SLIDER_SHELL)
    },
}
</script>

<style>
.j-slider {
    font-size: 0.25rem;
    --THUMB-SIZE: 4em;
    --THUMB-RADIUS: calc(var(--THUMB-SIZE) / 2);
    display: inline-block;
    min-width: 100px;
}

.j-slider .slider-shell {
    padding: calc(var(--THUMB-RADIUS) - 0.25em) 0.25em;
    border-radius: var(--s-radius);
    display: block;
}

.j-slider .slider-shell>.background {
    background:
        linear-gradient(90deg, var(--primary) 50%, var(--border-dark) 50%);
    padding: 0 var(--THUMB-RADIUS);
    box-sizing: border-box;
    border-radius: 1em;
}

.j-slider .thumb {
    transform: translateX(var(--thumb-position));
    transition: 0.4s var(--ease-out);
    border-radius: var(--THUMB-SIZE);
    height: var(--THUMB-SIZE);
    width: var(--THUMB-SIZE);
    background: var(--white);
    position: absolute;
    left: 0;
}

/* ---------- Move ---------- */

.j-slider .move .thumb {
    transition: unset;
}

/* ---------- Focus ---------- */

.j-slider input:focus-visible+.slider-shell {
    outline: 2px solid var(--info);
}


/* ---------- Disabled ---------- */

.j-slider.disabled .slider-shell>.background {
    background:
        linear-gradient(90deg, var(--border-dark) 50%, var(--border) 50%);
}

.j-slider .disabled .thumb {
    background: var(--border-light);
}
</style>
