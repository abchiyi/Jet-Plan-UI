import { scrollTo } from '../lib/inedx'

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
