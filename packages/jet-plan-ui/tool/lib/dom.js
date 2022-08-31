import { ref, onMounted, onUnmounted } from 'vue'

export function getOffset (el) {
    if (!el) return {
        size: 0,
        // XXX不适合的属性名称
        elWidth: 0,
        elHeight: 0,
        y: 0,
        x: 0
    }


    function getWindowScroll () {
        // FullSupport
        const supportPageOffset = window.pageXOffset !== undefined
        const isCSS1Compat = ((document.compatMode || "") === "CSS1Compat")

        const x = supportPageOffset ?
            window.pageXOffset : isCSS1Compat ?
                document.documentElement.scrollLeft :
                document.body.scrollLeft

        const y = supportPageOffset ?
            window.pageYOffset : isCSS1Compat ?
                document.documentElement.scrollTop :
                document.body.scrollTop

        return {
            x: x,
            y: y
        }
    }

    function getEl () {
        if (el.$el) {
            return el.$el
        }
        return el
    }

    const EL = getEl()

    // 获取元素内部不含边框相对页面的实际距离
    const elScreenBounding = EL.getBoundingClientRect()
    const windowScroll = getWindowScroll()
    const scrollTop = windowScroll.y || EL.scrollTop
    const scrollLeft = windowScroll.x || EL.scrollLeft

    const elWidth = elScreenBounding.right - elScreenBounding.left
    const elHeight = elScreenBounding.bottom - elScreenBounding.top
    return {
        size: elScreenBounding,
        // XXX不适合的属性名称
        elWidth: elWidth,
        elHeight: elHeight,
        y: elScreenBounding.top + scrollTop - EL.clientTop,
        x: elScreenBounding.left + scrollLeft - EL.clientLeft
    }
}

export function shadowPainter (direction, intensity, color) {



    function calcDirection (array) {
        if (array.indexOf(direction) !== -1) {
            return direction == array[1] ?
                intensity + "px" :
                intensity * -1 + 'px'
        }
        return '0'
    }

    function x () {
        return calcDirection(['left', 'right'])
    }

    function y () {
        return calcDirection(['top', 'bottom'])
    }
    chekcDirection(direction)
    return `
    ${x()} ${y()}
    ${1.5 * intensity}px
    ${0.1 * intensity}px
    ${color ? color : 'var(--material-shadow)'}`
}
export class SHADOW_PAINTER_ERROR extends Error {
    constructor (message) {
        super(message)
        this.name = 'ShadowPainterError'
    }
}

export function chekcDirection (direction) {
    const args = ['center', 'top', 'bottom', 'left', 'right']
    if (direction) {
        if (args.indexOf(direction.toLocaleLowerCase()) == -1) {
            throw new SHADOW_PAINTER_ERROR(
                `ShadowPainter:DIRECTON_ERROR:ErrorArg: ${direction}
                Only supports:
                [default:center ['top', 'bottom', 'left', 'right']]`)
        }
    }

}

export function useMouseDirection () {
    // 被组合式函数封装和管理的状态
    const x = ref(0)
    const y = ref(0)

    const xDirection = ref(0)
    const yDirection = ref(0)

    const xOld = ref(0)
    const yOld = ref(0)



    function touchEventCompatible (event) {
        if (event.type.indexOf('touch') != -1) {
            return event.touches[0]
        }
        return event
    }

    // 组合式函数可以随时更改其状态。
    function update (event) {
        event = touchEventCompatible(event)
        x.value = event.pageX
        y.value = event.pageY

        xDirection.value = x.value > xOld.value ? 'right' : 'left'
        yDirection.value = y.value > yOld.value ? 'bottom' : 'top'

        setTimeout(() => {
            xOld.value = event.pageX
            yOld.value = event.pageY
        }, 30)


    }

    // 鼠标
    onMounted(() => window.addEventListener('mousemove', update))
    onUnmounted(() => window.removeEventListener('mousemove', update))
    // 触摸
    onMounted(() => window.addEventListener('touchmove', update))
    onUnmounted(() => window.removeEventListener('touchmove', update))

    // 通过返回值暴露所管理的状态
    return { xDirection, yDirection }
}
