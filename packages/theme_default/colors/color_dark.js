const BACKGROUND = {
    foreground_color: '#363636',
    border: "#6a6a6a",
    background: "#202020",
}

const TEXTCOLOR = {
    text_disabled: '#CCCCCC4d',
    text_hint: '#CCCCCC',
    text: "#FCFCFC",
}

const BASECOLOR = {
    // secondary: "#2D2D2D;",
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
    shadow: '#16161660',
}
export default {
    ...BACKGROUND,
    ...TEXTCOLOR,
    ...BASECOLOR,
    ...OTHERS
}
