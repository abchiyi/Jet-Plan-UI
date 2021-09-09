export default class TimeoutAction {
    constructor(timeout) {
        this.timeout = timeout;
        this.timeoutID = null;
    }

    action(callback) {
        if (this.timeoutID) clearTimeout(this.timeoutID)
        this.timeoutID = setTimeout(() => {
            callback()
        },
            this.timeout
        )
    }
}
