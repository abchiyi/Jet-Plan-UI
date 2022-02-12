

export function getOffset (el) {
    function getWindowScroll () {
        // FullSupport
        const supportPageOffset = window.pageXOffset !== undefined;
        const isCSS1Compat = ((document.compatMode || "") === "CSS1Compat");

        const x = supportPageOffset ?
            window.pageXOffset : isCSS1Compat ?
                document.documentElement.scrollLeft :
                document.body.scrollLeft;

        const y = supportPageOffset ?
            window.pageYOffset : isCSS1Compat ?
                document.documentElement.scrollTop :
                document.body.scrollTop;

        return {
            x: x,
            y: y
        }
    }

    // 获取元素内部不含边框相对页面的实际距离
    const elScreenBounding = el.getBoundingClientRect()
    const windowScrool = getWindowScroll()
    const scrollTop = windowScrool.y || el.scrollTop
    const scrollLeft = windowScrool.x || el.scrollLeft

    return {
        size: elScreenBounding,
        // XXX不适合的属性名称
        y: elScreenBounding.top + scrollTop - el.clientTop,
        x: elScreenBounding.left + scrollLeft - el.clientLeft
    }
}
