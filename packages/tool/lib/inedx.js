import $ from 'jquery';
import 'jquery.easing'

import {
    getOffset
} from './dom';



export function scrollTo (elID, toTop) {
    let position;
    if (elID.toLowerCase() === "top") {
        // 保留字段,返回顶部
        position = 0
    } else {
        const SCREENHEIGHT = getOffset($('body')[0]).size.height
        const ELHEIGHT = getOffset($(elID)[0]).size.height
        const TOP = $(elID).offset().top

        // 设置 toTop 的默认值
        // FIXME不需要的默认值，容易引发逻辑错误
        toTop = toTop ? Math.round(toTop) : 200

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
        duration: 500,
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
    ${0.3 * intensity}px
    ${color ? color : 'var(--shadow)'}`
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
export class SHADOW_PAINTER_ERROR extends Error {
    constructor (message) {
        super(message);
        this.name = 'ShadowPainterError';
    }
}

export class TimedActionLimit {
    constructor (timeout, limit = 1) {
        this.limit = limit;
        this.timeout = timeout;
        this.timeoutID = [];
    }

    action (callback) {
        const timeoutObj = setTimeout(
            () => {
                callback()
            }, this.timeout
        )
        this.timeoutID.push(timeoutObj)

        // 移除超时的动作
        setTimeout(
            () => {
                let index = this.timeoutID.indexOf(timeoutObj)
                if (index != -1) this.timeoutID.splice(index, 1)
            }, this.timeout
        )

        // 多次时间内执行动作,取消执行先前动作
        if (this.timeoutID.length > this.limit) {
            let id = this.timeoutID.shift()
            clearTimeout(id)
        }
    }
}

export function installComponent (Vue, array) {
    array.forEach(component => {
        Vue.component(component.name, component)
    })
}
export function installDirective (Vue, array) {
    array.forEach(directive => {
        Vue.directive(directive.name, directive)
    })
}
