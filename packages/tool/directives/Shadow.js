function shadowPainter(direction = String, intensity = Number) {
    function calcDirection(array) {
        if (array.indexOf(direction) !== -1) {
            return direction == array[1] ?
                intensity + "px" :
                intensity * -1 + 'px'
        }
        return '0'
    }

    function x() {
        return calcDirection(['left', 'right'])
    }

    function y() {
        return calcDirection(['top', 'bottom'])
    }
    chekcDirection(direction)
    return `${x()} ${y()} ${2*intensity}px ${1.2*intensity}px var(--shadow)`
}

class SHADOW_PAINTER_ERROR extends Error {
    constructor(message) {
        super(message);
        this.name = 'ShadowPainterError';
    }
}

function chekcDirection(direction) {
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

function setSahdow(el, binding) {
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
    mounted(el, binding) {
        el._oldStyle = {
            boxShadow: el.style.boxShadow
        }
        setSahdow(el, binding)
    },
    updated(el, binding) {
        setSahdow(el, binding)
    },
    unmounted(el) {
        el.style.boxShadow = el._oldStyle.boxShadow
        console.log('unShadow');
    },
}

export {
    SHADOW_PAINTER_ERROR,
    chekcDirection,
    shadowPainter
}
