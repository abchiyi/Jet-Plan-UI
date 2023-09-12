import { defineTheme } from "jet-plan-ui";

export const jetLight = defineTheme({
  name: "JetLight",
  text: {
    lightDisabled: "rgba(255, 255, 255, 0.5)",
    disabled: "#0000003e",
    default: "grey700",
    dark: "grey700",
    light: "white",
    hint: "grey500",
  },
  infoColors: {
    primary: {
      transparent: "rgba(118, 144, 146, 0.35)",
      default: "#91b09b",
      light: "#b0caac",
      dark: "#769092",
      disabled: "grey",
    },
    success: {
      transparent: "rgba(56, 142, 60, 0.5)",
      default: "light_greenA700",
      light: "greenA100",
      dark: "#388E3C",
    },
    error: {
      transparent: "rgba(198, 40, 40, 0.5)",
      dark: "rgba(198, 40, 40, 1)",
      default: "red",
      light: "red100",
    },
    info: {
      transparent: "",
      dark: "",
      default: "blue",
      light: "blue100",
    },
    warning: {
      transparent: "rgba(255, 143, 0, 0.35)",
      default: "#FFC107",
      light: "#FFE082",
      dark: "#FF8F00",
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
  shadow: "rgba(189, 189, 189, 0.3)",
});

export const jetDark = defineTheme({
  ...jetLight,
  name: "JetDark",
  text: {
    lightDisabled: "rgba(255, 255, 255, 0.5)",
    disabled: "#0000003e",
    default: "grey300",
    light: "grey100",
    dark: "grey200",
    hint: "grey500",
  },
  border: {
    light: "grey500",
    default: "grey600",
    dark: "grey700",
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
  shadow: "rgba(189, 189, 189, 0.3)",
});

export const jetAuto = defineTheme({
  ...jetLight,
  name: "JetAuto",
  AUTO() {
    return jetDark;
  },
});
