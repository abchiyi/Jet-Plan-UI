import { defineTheme } from "packages/jet-plan-ui/theme";

export const jetLight = defineTheme({
  name: "JetLight",
  text: {
    disabled: "#0000003e",
    default: "grey700",
    dark: "grey700",
    light: "white",
    hint: "grey500",
  },
  infoColors: {
    primary: {
      default: "#91b09b",
      light: "#b0caac",
      disabled: "grey",
    },
    success: {
      default: "light_greenA700",
      light: "greenA100",
    },
    error: {
      default: "red",
      light: "red100",
    },
    info: {
      default: "blue",
      light: "blue100",
    },
    warning: {
      default: "amber",
      light: "amber200",
    },
  },
  border: {
    default: "grey300",
    light: "grey200",
    dark: "grey400",
  },
  material: {
    primary: "teal",
    shadow: "#0000002e",
    shadowPrimary: "#004d405e",
  },
  background: {
    default: "grey50",
    dark: "grey100",
    light: "white",
  },
  mask: {
    default: "#bdbdbd4d",
  },
  frostedGlass: "#ffffffb3",
  shadow: "grey300",
});

export const jetDark = defineTheme({
  name: "JetDark",
  text: {
    disabled: "#0000003e",
    default: "grey300",
    light: "grey100",
    dark: "grey200",
    hint: "grey500",
  },
  infoColors: {
    primary: {
      default: "#91b09b",
      light: "#b0caac",
      disabled: "grey",
    },
    warning: {
      default: "amber",
      light: "amber200",
    },
    success: {
      default: "light_greenA700",
      light: "greenA100",
    },
    error: {
      default: "red",
      light: "red100",
    },
    info: {
      default: "blue",
      light: "blue100",
    },
  },
  border: {
    light: "grey500",
    default: "grey600",
    dark: "grey700",
  },
  material: {
    primary: "teal",
    shadow: "#0000002e",
    shadowPrimary: "#004d405e",
  },
  background: {
    light: "grey600",
    default: "grey800",
    dark: "grey900",
  },
  mask: {
    default: "#bdbdbd4d",
  },
  frostedGlass: "#424242b3",
  shadow: "grey300",
});

export const jetAuto = defineTheme({
  ...jetLight,
  name: "JetAuto",
  AUTO() {
    return jetDark;
  },
});
