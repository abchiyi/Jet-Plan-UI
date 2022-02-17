import { TimedActionLimit } from '../lib/inedx'

function ReSize () {
    let width = window.innerWidth;
    let col = {
        xs: width < 576,
        sm: width >= 576 && width < 768,
        md: width >= 768 && width < 992,
        lg: width >= 992 && width < 1200,
        xl: width > 1200
    }

    function activeCol () {
        for (let i in col) {
            if (col[i]) return i
        }
    }
    return {
        activeCol: activeCol(),
        width: width,
        col: col,
        contains (array, callback) {
            callback(array.indexOf(this.activeCol) != -1)
        }
    }
}

const timeout = new TimedActionLimit(100)
export default {
    name: 're-screen-size',
    created (el, binding) {
        // const binding = arguments[1]
        binding.value(
            el,
            ReSize()
        )
        window.addEventListener('resize', () => {
            timeout.action(() => {
                binding.value(
                    el,
                    ReSize()
                )
            })
        })
    },
    reSize: ReSize
}
