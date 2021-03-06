import $ from 'jquery'
import 'jquery.easing'


export function getOffset (el) {
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

    // 获取元素内部不含边框相对页面的实际距离
    const elScreenBounding = el.getBoundingClientRect()
    const windowScrool = getWindowScroll()
    const scrollTop = windowScrool.y || el.scrollTop
    const scrollLeft = windowScrool.x || el.scrollLeft

    const elWidth = elScreenBounding.right - elScreenBounding.left
    const elHeight = elScreenBounding.bottom - elScreenBounding.top
    return {
        size: elScreenBounding,
        // XXX不适合的属性名称
        elWidth: elWidth,
        elHeight: elHeight,
        y: elScreenBounding.top + scrollTop - el.clientTop,
        x: elScreenBounding.left + scrollLeft - el.clientLeft
    }
}

export function scrollTo (elID, toTop, duration) {
    let position
    if (!duration) duration = 500
    if (elID.toLowerCase() === "top") {
        // 保留字段,返回顶部
        position = 0
    } else {
        const SCREENHEIGHT = getOffset($('body')[0]).size.height
        const ELHEIGHT = getOffset($(elID)[0]).size.height
        const TOP = $(elID).offset().top

        // 设置 toTop 的默认值
        toTop = toTop ? Math.round(toTop) : 0

        if (ELHEIGHT <= SCREENHEIGHT) {
            // 当元素接近屏幕高度时
            position = ELHEIGHT >= SCREENHEIGHT * 0.75 ?
                TOP - toTop :
                TOP - (SCREENHEIGHT - ELHEIGHT) / 2
        } else {
            position = TOP - toTop
        }

        position = position < 1 ? 0 : position // 元素在顶部时,设置为0
    }


    $('html, body').animate({
        scrollTop: position
    }, {
        // TODO 使用UI 定义的缓动函数,和根据元素滚动距离定义的动画时间
        duration: duration,
        easing: 'easeInOutQuad'
    })
    return false

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
    ${color ? color : 'var(--shadow)'}`
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
