const BACKGROUND = {
    foreground: "#f7f7eb",
    border: "#d9c8ae",
    background: "#f4e8d7",
    disabled: "#b9aa94",
}

const TEXTCOLOR = {
    "text-disabled": "#b8aa944d",
    "text-hint": "#8f8473",
    text: "#575046",
}

const BASECOLOR = {
    secondary: "#ffeecf",
    primary: "#188791",
    success: "#53d959",
    warning: "#ffb026",
    error: "#ff3f28",
    info: "#0e75cd",
}

const OTHERS = {
    frosted_glass: BACKGROUND.foreground + "b3",
    card: BACKGROUND.foreground,
    shadow: "#00000033",
    mask: "#27272760",
    "text-light": "#fffcdb",
    "text-dark": TEXTCOLOR.text,
}

export default {
    ...BACKGROUND,
    ...TEXTCOLOR,
    ...BASECOLOR,
    ...OTHERS,
}
