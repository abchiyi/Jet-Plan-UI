import $ from 'jquery';
import 'jquery.easing'
import {
    getOffset
} from '../src/dom'

function scroll(elID) {
    const SCREENHEIGHT = getOffset($('body')[0]).size.height
    const ELHEIGHT = getOffset($(elID)[0]).size.height
    let position = $(elID).offset().top - (SCREENHEIGHT - ELHEIGHT) / 2
    position = position < 1 ? 0 : position // 元素在顶部时,设置为0

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

                scroll(binding.value)
            }
        )
    },
    unmounted(el, binding) {
        el.removeEventListener(
            'click', () => {
                scroll(binding.value)
            }
        )
    },
}
