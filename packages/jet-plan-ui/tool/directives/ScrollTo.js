import { scrollTo } from '../lib/dom'

export default {
    name: 'scroll-to',
    mounted (el, binding) {
        el.addEventListener(
            'click', () => {
                scrollTo(binding.value, binding.arg)
            }
        )
    },
    unmounted (el, binding) {
        el.removeEventListener(
            'click', () => {
                scrollTo(binding.value, binding.arg)
            }
        )
    },
}
