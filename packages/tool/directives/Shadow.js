import { shadowPainter, SHADOW_PAINTER_ERROR } from '../lib/inedx'

function setSahdow (el, binding) {
    let direction = binding.arg ? binding.arg : 'center'
    let intensity = binding.value ? binding.value : '1'

    try {
        el.style.boxShadow = shadowPainter(direction, intensity)
    } catch (e) {
        if (e instanceof SHADOW_PAINTER_ERROR) console.error(
            `v-shadow:DIRECTON_ERROR:ErrorArg: ${direction}
            Only supports:
            [default:center ['top', 'bottom', 'left', 'right']]`
        );
    }


}

export default {
    name: 'shadow',
    mounted (el, binding) {
        el._oldStyle = {
            boxShadow: el.style.boxShadow
        }
        setSahdow(el, binding)
    },
    updated (el, binding) {
        setSahdow(el, binding)
    },
    unmounted (el) {
        el.style.boxShadow = el._oldStyle.boxShadow
    },
}
