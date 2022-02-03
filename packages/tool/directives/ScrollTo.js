import $ from 'jquery';

// FIXME 不能滚动元素到屏幕中央
function scroll(elID) {
    $('html, body').animate({
        scrollTop: $(elID).offset().top
    }, {
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
