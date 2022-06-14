function ReSize () {
    let width = window.innerWidth
    let height = window.innerHeight
    let col = {
        xs: width <= 578,
        sm: width > 578 && width <= 768,
        md: width > 768 && width <= 992,
        lg: width > 992 && width <= 1200,
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
        height: height,
        col: col,
        contains (array, callback) {
            callback(array.indexOf(this.activeCol) != -1)
        }
    }
}

export default {
    name: 're-screen-size',
    created (el, binding) {
        window.addEventListener('resize', () => {
            binding.value(
                el,
                ReSize()
            )
        })
    },
    mounted (el, binding) {
        binding.value(
            el,
            ReSize()
        )
    },
    reSize: ReSize
}
