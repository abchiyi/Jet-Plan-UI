const BACKGROUND = {
    foreground: '#ffffff',
    border: "#e0e0e0",
    background: "#f3f3f3",
    disabled: '#f3f3f3'
}

const TEXTCOLOR = {
    'text-disabled': '#5C5C5C4d',
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
    frosted_glass: BACKGROUND.foreground + 'b3',
    card: BACKGROUND.foreground,
    shadow: '#27272760',
    mask: '#27272760'
}

export default {
    ...BACKGROUND,
    ...TEXTCOLOR,
    ...BASECOLOR,
    ...OTHERS
}
