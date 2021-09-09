import ta from "../../src/TimedActionLimit";
const ReSize = function () {
    let width = window.innerWidth;
    return {
        width: width,
        col: {
            xs: width < 575,
            sm: width > 576 && width < 768,
            md: width > 768 && width < 992,
            lg: width > 992 && width < 1200,
            xl: width > 1200
        },
    }
}

const timeout = new ta(200)
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
