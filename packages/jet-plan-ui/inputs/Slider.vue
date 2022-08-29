<script>
const NAME = 'j-slider'
import { h, nextTick } from 'vue'
import { TrackBar } from "../baseComponents"
import { Bubble } from '../bubble'
import { getOffset } from '../tool/lib/dom'
export default {
    name: NAME,
    mounted () {
        // 计算默认值保证初始加载时拨杆处于正确位置
        this.valueToPercentage(this.modelValue)
    },
    data () {
        return {
            percentage: 0,

            sliderTrackPosition: 0,
            bubbleEl: undefined,
            showBubble: false,
            bubbleSize: {},
            value: 0,
            idForTimeOut: undefined,
        }
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
        getValue () {
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
        // Calc
        valueToPercentage (modelValue) {
            this.percentage = this.__valueToPercentage(modelValue)
        },
        __valueToPercentage (value) {
            const { max, min } = this.getValue()
            const range = max - min
            let percentage = value / range - min / range
            percentage = percentage > 1 ? 1 : percentage < 0 ? 0 : percentage
            return percentage
        },
        percentageToValue () {
            const { max, min, step } = this.getValue()

            // XXX
            function findCloseNum (arr, num) {
                var index = 0 // 保存最接近数值在数组中的索引
                var d_value = Number.MAX_VALUE // 保存差值绝对值，默认为最大数值

                for (var i = 0; i < arr.length; i++) {
                    var new_d_value = Math.abs(arr[i] - num) // 新差值
                    if (new_d_value <= d_value) {
                        // 如果新差值绝对值小于等于旧差值绝对值，保存新差值绝对值和索引
                        if (new_d_value === d_value && arr[i] < arr[index]) {
                            // 如果数组中两个数值跟目标数值差值一样，取大
                            continue
                        }
                        index = i
                        d_value = new_d_value
                    }
                }

                return arr[index] // 返回最接近的数值
            }

            let value = this.percentage * (max - min) + min
            value = Math.round(value / step) * step + 0 * min
            value = parseFloat(value.toFixed(5))
            value = value > max ? max : value < min ? min : value

            if (this.step instanceof Array) {
                const targetNum = findCloseNum(this.step, value)
                this.$emit("update:modelValue", targetNum)
            } else {
                this.$emit("update:modelValue", value)
            }
        },




        async start (event) {
            this.percentageToValue()

            // this.$nextTick(() => {
            await nextTick()
            this.sliderTrackPosition = event.nowPosition
            this.showBubble = true
            // })
        },
        async move (event) {
            this.percentageToValue()
            await nextTick()

            // this.$nextTick(() => {
            clearTimeout(this.idForTimeOut) // 防止连续点击气泡闪烁
            this.sliderTrackPosition = event.nowPosition
            this.bubbleSize = getOffset(this.bubbleEl)
            // })
        },
        async end (event) {
            this.valueToPercentage(this.modelValue)

            await nextTick()

            // this.$nextTick(() => {
            this.sliderTrackPosition = event.nowPosition
            clearTimeout(this.idForTimeOut) // 防止连续点击气泡闪烁
            this.idForTimeOut = setTimeout(() => {
                this.showBubble = false
            }, 1000)
            // })
        },
    },
    computed: {
        style () {
            return {
                '--bubble-position': this.bubblePosition,
            }
        },

        bubblePosition () {
            const elWidth = this.bubbleSize.elWidth
            const MAX = 200 - elWidth
            const MIN = 0
            const p = this.sliderTrackPosition - elWidth / 2
            return (p < MIN ? MIN : p > MAX ? MAX : p) + 'px'
        },
    },
    watch: {
        modelValue (v) {
            if (!this.showBubble) {
                this.valueToPercentage(v)
            }
        },
        percentage () {
            this.percentageToValue()
        },

        bubbleEl (v) {
            if (v) {
                const el = this.bubbleEl

                el.style.transition = 'unset'
                el.style.display = 'inherit'
                el.style.opacity = '0'

                this.bubbleSize = getOffset(this.bubbleEl)

                el.style.transition = ''
                el.style.opacity = ''
            }
        },

    },
    emits: [
        'update:modelValue',
        'percentage',
    ],
    render () {
        const INPUT = h('input', {
            value: this.modelValue,
            type: 'hidden',
        })

        const TRACK_BAR = h(TrackBar, {
            onPercentageChange: v => this.percentage = v,
            percentage: this.percentage,

            disabled: this.disabled,

            onTrackStart: this.start,
            onTrackMove: this.move,
            onTrackEnd: this.end
        })

        return h(
            Bubble,
            {
                class: [NAME],
                style: this.style,

                message: this.modelValue,
                position: 'top',

                onBubbleShow: (el) => this.bubbleEl = el,
                show: this.showBubble
            },
            {
                default: () => [INPUT, TRACK_BAR]
            }
        )
    },
}
</script>

<style>
.j-slider.j-bubble .bubble {
    left: var(--bubble-position)
}
</style>
