import jetPlanThemePack, { jetAuto } from "jet-plan-ui-theme";
import { newReactiveThemeSystem } from "jet-plan-ui";
export const RTS = newReactiveThemeSystem("jet-ui-doc-theme", jetAuto);
RTS.install(jetPlanThemePack);
RTS.setTheme("JetLight");
