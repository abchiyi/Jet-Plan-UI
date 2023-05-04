import type { ThemePack } from "jet-plan-ui/theme";
import { jetDark, jetLight, jetAuto } from "./theme.config";

const themePack: ThemePack = {
  install(RTS) {
    RTS.addTheme(jetAuto);
    RTS.addTheme(jetDark);
    RTS.addTheme(jetLight);
    RTS.setTheme(jetAuto.name);
  },
};

export default themePack;

export * from "./theme.config";
