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
        this.waitCoolingDown = waitCoolingDown
        this.limit = limit
        this.timeout = timeout
        this.timeoutID = []
        this.overheat = false
        this.conter = limit
        this.cooledAlarm = false
        this.overheatAlarm = false
    }

    action (callback) {
        if (!this.overheat) {
            this.conter = this.conter - 1
            this.overheat = this.conter == 0
            callback()
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
            setTimeout(() => {
                this.overheat = false
                // 通知外部程序已冷却
                if (this.cooledAlarm) this.cooledAlarm()
                this.timeoutID = []
            }, this.timeout)
        )
        this.conter = this.limit
    }

    __waitControl () {
        if (this.timeoutID.length > 1) {
            const clId = this.waitCoolingDown ?
                this.timeoutID.shift() :
                this.timeoutID.pop()
            clearTimeout(clId)
        }
    }

    setCooledAlarm (callback) {
        this.cooledAlarm = callback
    }

    setOverheatAlarm (callback) {
        this.overheatAlarm = callback
    }
    reSetConter () {
        this.conter = this.limit
    }
}

export function installComponent (Vue, array) {
    array.forEach((component) => {
        Vue.component(component.name, component)
    })
}
export function installDirective (Vue, array) {
    array.forEach((directive) => {
        Vue.directive(directive.name, directive)
    })
}

export function hexToRgb (hex) {
    function parse (v) {
        return parseInt(`0x${v}`)
    }
    if (!hex[0] == "#") hex = '#' + hex


    let rgb = {
        r: parse(hex.slice(1, 3)),
        g: parse(hex.slice(3, 5)),
        b: parse(hex.slice(5, 7)),
        opacity: parseFloat(parse(hex.slice(7)) / 255)
    }
    const max = Math.abs(
        parseFloat(
            (parseInt(rgb.r) + parseInt(rgb.g) + parseInt(rgb.b)) /
            (255 * 3)
        ).toFixed(3))

    return {
        color: rgb.opacity < 1 ?
            `rgba(${rgb.r},${rgb.g},${rgb.b},${rgb.opacity})` : `rgb(${rgb.r},${rgb.g},${rgb.b})`,
        opacity: isNaN(rgb.opacity) ? 1 : rgb.opacity,
        max: rgb.opacity ? max * rgb.opacity : max,
    }
}

export function rgbToHex (rgb) {
    function colorToHex (color) {
        var hexadecimal = color.toString(16)
        return hexadecimal.length == 1 ? "0" + hexadecimal : hexadecimal
    }
    const leftBrackets = rgb.indexOf("(") + 1
    const rightBrackets = rgb.indexOf(")")
    let rgba = rgb.substring(leftBrackets, rightBrackets).split(",")
    let s = ["#"]
    let conter = 0
    rgba.forEach((v) => {
        conter++
        v = v.replace(/^\s+|\s+$/gm, "")
        s.push(
            conter < 4 ? colorToHex(Math.abs(v)) : colorToHex(parseInt(v * 255))
        )
    })

    const max = Math.abs(
        parseFloat(
            (parseInt(rgba[0]) + parseInt(rgba[1]) + parseInt(rgba[2])) /
            (255 * 3)
        ).toFixed(3)
    )

    return {
        color: s.join(""),
        opacity: parseFloat(rgba[3] ? rgba[3] : 1),
        max: rgba[3] ? max * rgba[3] : max
    }
}

// TODO 需要添加文档
export function autoTextColor (el) {
    function getBgColor (el) {
        return window.getComputedStyle(el).backgroundColor
    }
    let hexColor = rgbToHex(getBgColor(el))
    if (hexColor.opacity == 0) {
        el.style.color = ''
    } else {
        if (hexColor.max < 0.6) {
            return "var(--text-light)"
        } else {
            return "var(--text-dark)"
        }
    }
}

export function* toBodyNode (el) {
    // 从任意node节点迭代至body节点
    let stop = false
    let node = el
    while (!stop) {
        node = node.parentNode
        yield node
        if (node.tagName == 'BODY') stop = true
    }
}


export function searchBackgroundColor (el) {
    function getBgColor (el) {
        return rgbToHex(
            window.getComputedStyle(el).backgroundColor
        )
    }

    let color = getBgColor(el)
    if (color.opacity) return color

    let node = toBodyNode(el)
    let stop = false
    while (!stop) {
        let g = node.next()
        if (g.value) {
            let color = getBgColor(g.value)
            if (color.opacity) return color
        } else {
            stop = true
        }
    }
    return '#00000000'
}

export function reTextColor (el) {
    function getBgColor (el) {
        return window.getComputedStyle(el).backgroundColor
    }
    let hexColor = rgbToHex(getBgColor(el))
    if (hexColor.opacity == 0) {
        el.style.color = ''
    } else {
        if (hexColor.max < 0.6) {
            el.style.color = "var(--text-light)"
        } else {
            el.style.color = "var(--text-dark)"
        }
    }
}

export function propInit (_type, _default) {
    return {
        type: _type,
        default: _default,
    }
}

export function propInitBoolean (default_value) {
    return propInit(Boolean, default_value)
}
