function getThemeStyleEl(elId) {
    let styleEl = document.getElementById(elId);
    if (styleEl) return styleEl;
    styleEl = document.createElement('style');
    styleEl.id = elId;
    document.head.appendChild(styleEl)
    return styleEl
}


export default {
    use(theme) {
        const themeEl = getThemeStyleEl('test-color')
        const innerHTML = [];
        for (const key in theme) {
            if (Object.hasOwnProperty.call(theme, key)) {
                innerHTML.push(`--${key}:${theme[key]}`)
            }
        }
        themeEl.innerHTML = `:root{${innerHTML.join(';')}}`
    }
}
