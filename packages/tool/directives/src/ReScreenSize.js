import ta from "../../src/TimedActionLimit";
const ReSize = function () {
    let width = window.innerWidth;
    let col = {
        xs: width < 576,
        sm: width >= 576 && width < 768,
        md: width >= 768 && width < 992,
        lg: width >= 992 && width < 1200,
        xl: width > 1200
    }
    function activeCol() {
        for (let i in col) {
            if (col[i]) return i
        }
    }
    return {
        activeCol: activeCol(),
        width: width,
        col: col,
    }
}

const timeout = new ta(100)
export default {
    name: 're-screen-size',
    created() {
        window.addEventListener('resize', () => {
            const binding = arguments[1]
            timeout.action(() => {
                binding.value(
                    ReSize()
                )
            })
        })
    }
}
