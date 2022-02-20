export class TimedActionLimit {
    constructor (timeout, limit = 1) {
        this.limit = limit;
        this.timeout = timeout;
        this.timeoutID = [];
    }

    action (callback) {
        const timeoutObj = setTimeout(
            () => {
                callback()
            }, this.timeout
        )
        this.timeoutID.push(timeoutObj)

        // 移除超时的动作
        setTimeout(
            () => {
                let index = this.timeoutID.indexOf(timeoutObj)
                if (index != -1) this.timeoutID.splice(index, 1)
            }, this.timeout
        )

        // 多次时间内执行动作,取消执行先前动作
        if (this.timeoutID.length > this.limit) {
            let id = this.timeoutID.shift()
            clearTimeout(id)
        }
    }
}

export function installComponent (Vue, array) {
    array.forEach(component => {
        Vue.component(component.name, component)
    })
}
export function installDirective (Vue, array) {
    array.forEach(directive => {
        Vue.directive(directive.name, directive)
    })
}
