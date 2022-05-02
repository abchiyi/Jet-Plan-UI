export function getClass(wrapper) {
    const classString = wrapper.attributes('class')
    if (classString) return classString.split(' ')
    return []
}


export default {
    getClass
}
