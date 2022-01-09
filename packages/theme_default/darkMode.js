const BACKGROUND = {
    foreground: '#363636',
    border: "#6a6a6a",
    background: "#202020",
    disabled: '#535353'
}

const TEXTCOLOR = {
    'text-disabled': '#CCCCCC4d',
    "text-hint": '#CCCCCC',
    text: "#FCFCFC",
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
    shadow: '#16161660',
    mask: '#85858560'
}

export default {
    name: 'Mousse-UI-Dark',
    ...BACKGROUND,
    ...TEXTCOLOR,
    ...BASECOLOR,
    ...OTHERS
}
