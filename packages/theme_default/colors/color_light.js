const BACKGROUND = {
    foreground_color: '#FBFBFB',
    border: "#EAEAEA",
    background: "#F3F3F3",
}

const TEXTCOLOR = {
    text_disabled: '#5C5C5C4d',
    text_hint: '#5C5C5C',
    text: "#1A1A1A",
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
    frosted_glass: BACKGROUND.foreground_color + 'b3',
    card: BACKGROUND.foreground_color,
    shadow: '#27272760',
    mask: '#27272760'
}

export default {
    ...BACKGROUND,
    ...TEXTCOLOR,
    ...BASECOLOR,
    ...OTHERS
}
