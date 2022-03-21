function getThemeStyleEl (elId) {
    let styleEl = document.getElementById(elId);
    if (styleEl) return styleEl;
    styleEl = document.createElement('style');
    styleEl.id = elId;
    document.head.appendChild(styleEl)
    return styleEl
}

function setTheme (el, colotString) {
    if (el.innerHTML != colotString) {
        el.innerHTML = colotString
    }

}

const onLoade = {
    firstLoade: true
}

function use (themes, auto, darkMode) {
    const EL = getThemeStyleEl("jet-plan-ui-theme-color");

    function themToString (colors) {
        let themeStringArry = Object.keys(colors).map(key => {
            if (Object.hasOwnProperty.call(colors, key)) {
                return `--${key}:${colors[key]}`;
            }
        });
        return `:root{${themeStringArry.join(";")}}`;
    }

    function themeSwitch (theme) {
        if (!auto) {
            // 常规切换主题
            let colors = darkMode ? theme.dark : theme.light
            return themToString(colors);
        } else {
            // 自动黑暗主题
            if (theme.dark) {
                const light = themToString(theme.light)
                const dark = themToString(theme.dark)
                return `
                    ${light}\n@media (prefers-color-scheme: dark) {${dark}}`
            }
        }
    }

    //兼容序列与单个对象
    themes.length != undefined ?
        setTheme(EL, themes.map(theme => {
            return themeSwitch(theme)
        }).join('\n')) :
        setTheme(EL, themeSwitch(themes))
}


export default {
    onLoade: onLoade,
    use: use
}
