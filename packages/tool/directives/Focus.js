export default {
    name: 'focus',
    created(el, binding) {
        const documentHandler = function (e) {
            binding.value(el.contains(e.target))
        }
        el['$$func'] = {
            documentHandler,
            func: binding.func
        }

        document.addEventListener("click", documentHandler)
    },
    unmounted(el) {
        document.removeEventListener('click', el['$$func'].documentHandler)
    }
}
