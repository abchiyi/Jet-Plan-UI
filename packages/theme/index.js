function getThemeStyleEl() {
  const colorThemeID = "web-pack-test-theme";
  let styleEl = document.getElementById(colorThemeID);
  if (styleEl) return styleEl;
  styleEl = document.createElement('style');
  styleEl.id = colorThemeID;
  document.head.appendChild(styleEl)
  return styleEl
}
const themes = {
  default: ":root {--primary: #1687a7;--secondary:#dfdfdf;--success:#4cd966;--warning:#ecb02c;--info:#0d75ec;--error:#f33f2e;--shadow-0:#27272767;--shadow-1:#0000004f;--bg-0:#e6e5e5;--bg-1:#fefefe;}"
}

export default {
  add(theme) {
    themes[theme.name] = theme.colors
  },
  use(name) {
    const themeEl = getThemeStyleEl()
    themeEl.innerHTML = themes[name]
  }
}
