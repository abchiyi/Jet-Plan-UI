const BACKGROUND = {
    foreground: "#ffffff",
    border: "#c8c8c8",
    background: "#e1e1e1",
    disabled: "#aaaaaa",
}

const TEXTCOLOR = {
    "text-disabled": "#5C5C5C4d",
    "text-hint": "#848484",
    text: "#505050",
}

const BASECOLOR = {
    secondary: BACKGROUND.border,
    primary: "#1687a7",
    success: "#4cd966",
    warning: "#ecb02c",
    error: "#f33f2e",
    info: "#0d75ec",
}

const OTHERS = {
    frosted_glass: BACKGROUND.foreground + "b3",
    card: BACKGROUND.foreground,
    shadow: "#00000033",
    mask: "#27272760",
    "text-light": "#FCFCFC",
    "text-dark": TEXTCOLOR.text,
}

export default {
    name: "JetUI-Light",
    ...BACKGROUND,
    ...TEXTCOLOR,
    ...BASECOLOR,
    ...OTHERS,
}
