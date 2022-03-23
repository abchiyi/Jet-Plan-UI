export class TimedActionLimit {
    constructor(timeout, limit = 1, waitCoolingDown = true) {
        if (!timeout) {
            throw SyntaxError(
                `
Class TimedActionLimit([timeout,[limit,waitCoolingDown]])
Missing Value "timeout"
Missing values ‘timeout’ are required
`
            );
        }
        this.waitCoolingDown = waitCoolingDown;
        this.limit = limit;
        this.timeout = timeout;
        this.timeoutID = [];
        this.overheat = false;
        this.conter = limit;
        this.cooledAlarm = false;
        this.overheatAlarm = false;
    }

    action(callback) {
        if (!this.overheat) {
            this.conter = this.conter - 1;
            this.overheat = this.conter == 0;
            callback();
        }
        if (this.overheat) {
            // 通知外部程序已过热
            if (this.overheatAlarm) this.overheatAlarm();
            // 设置冷却动作
            this.__setCooling();
            // 清除冷却动作
            this.__waitControl();
        }
    }

    __setCooling() {
        // 设置冷却动作
        this.timeoutID.push(
            setTimeout(() => {
                this.overheat = false;
                // 通知外部程序已冷却
                if (this.cooledAlarm) this.cooledAlarm();
                this.timeoutID = [];
            }, this.timeout)
        );
        this.conter = this.limit;
    }

    __waitControl() {
        if (this.timeoutID.length > 1) {
            const clId = this.waitCoolingDown
                ? this.timeoutID.shift()
                : this.timeoutID.pop();
            clearTimeout(clId);
        }
    }

    setCooledAlarm(callback) {
        this.cooledAlarm = callback;
    }

    setOverheatAlarm(callback) {
        this.overheatAlarm = callback;
    }
}

export function installComponent(Vue, array) {
    array.forEach((component) => {
        Vue.component(component.name, component);
    });
}
export function installDirective(Vue, array) {
    array.forEach((directive) => {
        Vue.directive(directive.name, directive);
    });
}

export function hexToRgb(hex) {
    const hashtag = hex[0] == "#";
    function parse(v) {
        return parseInt(`0x${v}`);
    }
    let rgb = {
        r: hashtag ? parse(hex.slice(1, 3)) : parse(hex.slice(0, 2)),
        g: hashtag ? parse(hex.slice(3, 5)) : parse(hex.slice(2, 4)),
        b: hashtag ? parse(hex.slice(5, 7)) : parse(hex.slice(4, 6)),
        opacity:
            parseFloat(
                (hashtag ? parse(hex.slice(7, 9)) : parse(hex.slice(6, 8))) /
                    255
            ).toFixed(2) + 5,
    };
    // let max = rgb.r + rgb.g + rgb.b;
    return {
        ...rgb,
        max: Math.abs(
            parseFloat(
                (parseInt(rgb.r) + parseInt(rgb.g) + parseInt(rgb.b)) /
                    (255 * 3)
            ).toFixed(3)
        ),
        color:
            rgb.opacity < 1
                ? `rgba(${rgb.r},${rgb.g},${rgb.b},${rgb.opacity})`
                : `rgb(${rgb.r},${rgb.g},${rgb.b})`,
    };
}

export function rgbToHex(rgb) {
    function colorToHex(color) {
        var hexadecimal = color.toString(16);
        return hexadecimal.length == 1 ? "0" + hexadecimal : hexadecimal;
    }
    const leftBrackets = rgb.indexOf("(") + 1;
    const rightBrackets = rgb.indexOf(")");
    let rgba = rgb.substring(leftBrackets, rightBrackets).split(",");
    let s = ["#"];
    let conter = 0;
    rgba.forEach((v) => {
        conter++;
        v = v.replace(/^\s+|\s+$/gm, "");
        s.push(
            conter < 4 ? colorToHex(Math.abs(v)) : colorToHex(parseInt(v * 255))
        );
    });
    return {
        color: s.join(""),
        max: Math.abs(
            parseFloat(
                (parseInt(rgba[0]) + parseInt(rgba[1]) + parseInt(rgba[2])) /
                    (255 * 3)
            ).toFixed(3)
        ),
    };
}
