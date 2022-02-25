export class TimedActionLimit {
    constructor (timeout, limit = 1, waitCoolingDown = true) {
        if (!timeout) {
            throw SyntaxError(
                `
Class TimedActionLimit([timeout,[limit,waitCoolingDown]])
Missing Value "timeout"
Missing values ‘timeout’ are required
`
            )
        }
        this.waitCoolingDown = waitCoolingDown;
        this.limit = limit;
        this.timeout = timeout;
        this.timeoutID = [];
        this.overheat = false
        this.conter = limit
        this.cooledAlarm = false
        this.overheatAlarm = false
    }

    action (callback) {
        if (!this.overheat) {
            callback()
            this.conter = this.conter - 1
            this.overheat = this.conter == 0
        }

        if (this.overheat) {
            // 通知外部程序已过热
            if (this.overheatAlarm) this.overheatAlarm()
            // 设置冷却动作
            this.__setCooling()
            // 清除冷却动作
            this.__waitControl()
        }
    }

    __setCooling () {
        // 设置冷却动作
        this.timeoutID.push(
            setTimeout(
                () => {
                    this.overheat = false
                    // 通知外部程序已冷却
                    if (this.cooledAlarm) this.cooledAlarm()
                    this.timeoutID = []
                },
                this.timeout
            ))
        this.conter = this.limit
    }

    __waitControl () {
        if (this.timeoutID.length > 1) {
            const clId = this.waitCoolingDown
                ? this.timeoutID.shift()
                : this.timeoutID.pop()
            clearTimeout(clId)
        }
    }

    setCooledAlarm (callback) {
        this.cooledAlarm = callback
    }

    setOverheatAlarm (callback) {
        this.overheatAlarm = callback
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
