export function getClass(wrapper) {
    const classString = wrapper.attributes('class')
    if (classString) return classString.split(' ')
    return []
}


export function getLastEvent(wrapper, evenName) {
    const events = wrapper.emitted(evenName)
    return events[events.length - 1][0]
}


export default {
    getClass
}
