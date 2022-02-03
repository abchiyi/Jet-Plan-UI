import $ from 'jquery';

// FIXME 不能滚动元素到屏幕中央
function scroll(elID) {
    $('html, body').animate({
        scrollTop: $(elID).offset().top
    }, {
        // TODO 使用UI 定义的缓动函数,和根据元素滚动距离定义的动画时间
        duration: 500,
        easing: 'swing'
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
