import $ from 'jquery';
import 'jquery.easing'
import {
    getOffset
} from '../src/dom'

function scroll(elID, toTop) {
    let position;
    if (elID.toLowerCase() === "top") {
        // 保留字段,返回顶部
        position = 0
    } else {
        const SCREENHEIGHT = getOffset($('body')[0]).size.height
        const ELHEIGHT = getOffset($(elID)[0]).size.height
        const TOP = $(elID).offset().top

        // 设置 toTop 的默认值
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
export default {
    name: 'scroll-to',
    mounted(el, binding) {
        el.addEventListener(
            'click', () => {
                scroll(binding.value, binding.arg)
            }
        )
    },
    unmounted(el, binding) {
        el.removeEventListener(
            'click', () => {
                scroll(binding.value, binding.arg)
            }
        )
    },
}
