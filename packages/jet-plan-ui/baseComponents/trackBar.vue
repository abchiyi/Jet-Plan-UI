<script>
const NAME = 'j-track-bar'
import { Row } from '../gird'
import { h, nextTick } from 'vue'
import { numericLimits, Bumper } from '../tool/lib'
import { getOffset } from '../tool/lib/dom'

export default {
    name: NAME,
    data () {
        return {
            nowPosition: undefined,
            Bumper: new Bumper(50),
            useTransition: true,
            $_percentage: null,
            eventActive: false
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
        }
    },
    computed: {
        style () {
            return {
                '--track-fill-width': this.nowPosition + 'px',
            }
        },
        classes () {
            return [
                this.disabled ? 'disabled' : '',
                !this.useTransition ? 'move' : ''
            ]
        },
    },
    emits: [
        'trackStart',
        'trackMove',
        'trackEnd',
        'percentageChange',
        'update:percentage',
        'active'
    ],
    methods: {
        // Calc
        positionToPercentage (event) {
            // 计算点击位置相对于滑动条百分比
            const elSize = getOffset(this)
            return numericLimits(
                0, 1,
                (event.pageX - elSize.size.left) / elSize.elWidth
            )
        },
        // Style
        updateSliderPosition (percentage) {
            this.Bumper.action() // 监控样式更新频率

            // 滑动条两端限位，避免超出边界
            const maxWidth = getOffset(this).elWidth
            this.nowPosition = numericLimits(
                0,
                maxWidth,
                maxWidth * percentage
            )
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
            document.addEventListener('mousemove', this.trackMove)
            document.addEventListener('mouseup', this.trackEnd)
            this.trackStart(event)
        },
        handleTouchStart (event) {
            if (this.disabled || this.displayOnly) return
            document.addEventListener('touchmove', this.trackMove)
            document.addEventListener('touchend', this.trackEnd)
            document.addEventListener('touchcancel', this.trackEnd)
            event.preventDefault()
            this.trackStart(event)
        },
        async trackStart (event, noEvent) {
            // 组件被事件激活时
            this.eventActive = true

            // 兼容触摸事件&点击事件
            function touchEventCompatible (event) {
                if (event.type.indexOf('touch') != -1) {
                    return event.touches[0]
                }
                return event
            }

            // 计算点击位置百分比
            const percentage = this.positionToPercentage(
                touchEventCompatible(event)
            )

            // 更新样式
            this.updateSliderPosition(percentage)
            await nextTick()

            // 同步外部值
            this.$emit('update:percentage', percentage)
            // 被move调用时不发出事件 'trackStart'
            if (!noEvent) this.$emit('trackStart', this)
        },
        async trackMove (event) {
            this.trackStart(event, true)
            await nextTick()

            this.$emit('trackMove', this)
        },
        trackEnd () {
            document.removeEventListener('mousemove', this.trackMove)
            document.removeEventListener('mouseup', this.trackEnd)

            document.removeEventListener('touchmove', this.trackMove)
            document.removeEventListener('touchend', this.trackEnd)
            document.removeEventListener('touchcancel', this.trackEnd)

            this.eventActive = false
            this.$emit('trackEnd', this)
        },
        // render
        renderDefault () {

            const SLIDER = h('div',
                {
                    class: ['slider'],
                },
                this.renderSlotSlider()
            )

            const BACKGROUND = h(
                'div',
                { class: ['background'] },
                [
                    SLIDER,
                    this.renderSlotBackground()
                ]
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
        },
        renderSlotSlider () {
            const SLOT = this.$slots.slider
            if (SLOT) return SLOT()
        },
        renderSlotBackground () {
            const SLOT = this.$slots.background
            if (SLOT) return SLOT()
        }
    },
    watch: {
        percentage (v) {
            // 仅在值被动变化时进行样式更新
            if (!this.eventActive) this.updateSliderPosition(v)
        },
        eventActive (v) {
            // 当组件被手动输入激活时
            this.$emit('active', v)
        }
    },
    created () {
        // 设置动画启停模式，当百分比发生快速变动时禁用动画以流畅追踪用户操作
        this.Bumper.setAlarmCooled(() => {
            this.transitionOn()
        })
        this.Bumper.setAlarmOverHeat(() => {
            this.transitionOff()
        })
    },
    mounted () {
        // 计算默认值保证初始加载时拨杆处于正确位置
        this.updateSliderPosition(this.percentage)
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
    position: relative;
    cursor: pointer;
    display: block;
    width: 100%;
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
    /* color: var(--text-light); */
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

.j-track-bar.move .slider {
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
    background-color: var(--border);
}

.j-track-bar.disabled .slider {
    background-color: var(--border-dark);
}
</style>
