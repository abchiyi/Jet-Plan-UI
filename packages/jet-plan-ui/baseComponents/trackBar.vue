<script>
const NAME = 'j-track-bar'
import { h } from 'vue'
import { getOffset } from '../tool/lib/dom'
import { TimedActionLimit } from '../tool/lib'
import { Row } from '../gird'
function touchEventCompatible (event) {
    if (event.type.indexOf('touch') != -1) {
        return event.touches[0]
    }
    return event
}
export default {
    name: NAME,
    data () {
        return {
            TAL: new TimedActionLimit(100, 2),
            nowPosition: undefined,
            useTransition: true,
        }
    },
    props: {
        disabled: {
            type: Boolean,
            default: false,
        },
        displayOnly: {
            type: Boolean,
            default: false,
        },
        percentage: {
            type: Number,
            required: true,
        },
    },
    computed: {
        style () {
            return {
                '--track-fill-width': this.nowPosition + 'px',
            }
        },
        classTrack () {
            return [!this.useTransition ? 'move' : '']
        },
        classes () {
            return [this.disabled ? 'disabled' : '']
        },
    },
    emits: [
        'trackStart',
        'trackMove',
        'trackEnd',
        'percentageChange',
        'update:percentage',
    ],
    methods: {
        // Calc
        positionToPercentage (event) {
            const elSize = getOffset(this)
            // 计算点击位置相对于滑动条百分比&限位
            const cpp = (event.pageX - elSize.size.left) / elSize.elWidth
            return cpp > 1 ? 1 : cpp < 0 ? 0 : cpp
        },
        // Style
        updateSliderPosition (percentage) {
            // 滑动条两端限位，避免超出边界
            const elSize = getOffset(this)
            let MAX = elSize.elWidth
            let MIN = 0
            let x = elSize.elWidth * percentage
            this.nowPosition = x < MIN ? MIN : x > MAX ? MAX : x
        },

        // Logic
        transitionOn () {
            this.useTransition = true
        },
        transitionOff () {
            this.useTransition = false
        },
        handleMouseDown (event) {
            if (this.disabled || this.displayOnly) return
            document.addEventListener('mousemove', this.transitionOff)
            document.addEventListener('mousemove', this.trackMove)
            document.addEventListener('mouseup', this.trackEnd)
            this.trackStart(event)
        },
        handleTouchStart (event) {
            if (this.disabled || this.displayOnly) return
            document.addEventListener('touchmove', this.transitionOff)
            document.addEventListener('touchmove', this.trackMove)
            document.addEventListener('touchend', this.trackEnd)
            document.addEventListener('touchcancel', this.trackEnd)
            event.preventDefault()
            this.trackStart(event)
        },
        trackStart (event, noEvent) {
            this.transitionOn()

            const percentage = this.positionToPercentage(
                touchEventCompatible(event)
            )

            // this.updateSliderPosition(percentage)
            this.$emit('update:percentage', percentage)
            this.$emit('percentageChange', percentage)

            if (!noEvent) {
                this.$nextTick(() => {
                    this.$emit('trackStart', this)
                })
            }
        },
        trackMove (event) {
            this.transitionOff()
            this.trackStart(event, true)
            this.$nextTick(() => {
                this.$emit('trackMove', this)
            })
        },
        trackEnd () {
            document.removeEventListener('mousemove', this.transitionOff)
            document.removeEventListener('mousemove', this.trackMove)
            document.removeEventListener('mouseup', this.trackEnd)

            document.removeEventListener('touchmove', this.transitionOff)
            document.removeEventListener('touchmove', this.trackMove)
            document.removeEventListener('touchend', this.trackEnd)
            document.removeEventListener('touchcancel', this.trackEnd)
            this.transitionOn()

            // 追踪结束时根据绑定值计算最后位置
            // this.updateSliderPosition(this.percentage)

            this.$nextTick(() => {
                this.$emit('trackEnd', this)
            })
        },
        // render
        renderDefault () {
            const BACKGROUND = h(
                'div',
                { class: ['background'] },

                // Slider
                h('div', {
                    class: ['slider', ...this.classTrack],
                })
            )

            const SLOT_CONTENT = h(
                Row,
                {
                    class: ['slot-content'],
                    Y: 'center',
                },

                {
                    default: () => {
                        if (this.$slots.default) {
                            return this.$slots.default()
                        }
                    },
                }
            )
            return h(
                'div',
                {
                    class: [NAME, ...this.classes],
                    ontouchstart: this.handleTouchStart,
                    onmousedown: this.handleMouseDown,
                    style: this.style,
                },
                [BACKGROUND, SLOT_CONTENT]
            )
        }
    },
    watch: {
        percentage (v) {
            this.updateSliderPosition(v)
        }
    },
    mounted () {
        // 计算默认值保证初始加载时拨杆处于正确位置
        this.updateSliderPosition(this.percentage)

        // 设置动画启停模式
        this.TAL.setCooledAlarm(() => {
            this.transitionOn()
        })
        this.TAL.setOverheatAlarm(() => {
            this.transitionOff()
            clearTimeout(this.timeOutID)
        })
    },
    render () {
        return this.renderDefault()
    },
}
</script>

<style>
/* VALUES */
.j-track-bar {
    --HEIGHT: 1em;
    --THUMB-DIAMETER: calc(1.4 * var(--HEIGHT));
    --THUMB-RADIUS: calc(var(--THUMB-DIAMETER) / 2);
}

.j-track-bar>* {
    user-select: none;
}

.j-track-bar {
    display: inline-block;
    position: relative;
    cursor: pointer;
    width: 200px;
}

/* ----- Slot ----- */
.j-track-bar .slot-content {
    height: var(--HEIGHT);
    position: absolute;
    right: 0;
    left: 0;
    top: 0;
}

.j-track-bar .slider {
    pointer-events: unset;
}

.j-track-bar .slot-content {
    color: var(--text-light);
    padding: 0 0.3em;
}

.j-track-bar .background {
    background-color: var(--border-dark);
    border-radius: var(--HEIGHT);
    height: var(--HEIGHT);
    position: relative;
    overflow: hidden;
}

.j-track-bar .slider {
    background-color: var(--primary);
    transform: translate3d(0, 0, 0);
    width: var(--track-fill-width);
    height: var(--HEIGHT);
    position: absolute;
}

/* ----- animation ----- */

.j-track-bar .bubble-anchor,
.j-track-bar .slider {
    transition: width 0.4s var(--ease-out);
}

.j-track-bar .slider.move {
    transition: unset;
}

/* ----- colors ----- */

/* default */
.j-track-bar .background {
    background-color: var(--border-dark);
    outline-color: var(--border);
}

/* disabled */
.j-track-bar.disabled {
    color: var(--text-disabled);
    cursor: not-allowed;
}

.j-track-bar.disabled .background {
    outline-color: var(--border-light);
    background-color: var(--border);
}

.j-track-bar.disabled .slider {
    background-color: var(--border-dark);
}
</style>
