export class TimedActionLimit {
    constructor (timeout, limit = 1) {
        this.limit = limit;
        this.timeout = timeout;
        this.timeoutID = [];
        this.overheat = false
        this.conter = limit
    }

    action (callback) {
        console.log(this);
        if (!this.overheat) {
            callback()
            this.conter = this.conter - 1
            this.overheat = this.conter == 0
        }
        if (this.overheat) {
            // 未冷却状态再次执行动作，重置冷却时间

            // 清除冷却动作
            this.timeoutID.forEach((timeoutID) => {
                clearTimeout(timeoutID)
            })
            this.timeoutID = []

            // 设置冷却动作
            let timeoutID = setTimeout(() => {
                this.overheat = false
                this.conter = this.limit
            }, this.timeout)
            this.timeoutID.push(timeoutID)
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
