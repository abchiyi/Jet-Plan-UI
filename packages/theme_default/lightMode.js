const BACKGROUND = {
    foreground: '#ffffff',
    border: "#dadada",
    background: "#ebebeb",
    disabled: '#ededed'
}

const TEXTCOLOR = {
    'text-disabled': '#5C5C5C4d',
    "text-hint": '#5C5C5C',
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
    frosted_glass: BACKGROUND.foreground + 'b3',
    card: BACKGROUND.foreground,
    shadow: '#00000033',
    mask: '#27272760',
}

export default {
    name: "Mousse-UI-Light",
    ...BACKGROUND,
    ...TEXTCOLOR,
    ...BASECOLOR,
    ...OTHERS
}
