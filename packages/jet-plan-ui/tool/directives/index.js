import ReScreenSize from "./ReScreenSize.js";
import ScrollTo from "./ScrollTo.js";
import Shadow from "./Shadow.js";
import Focus from "./Focus.js";
import AutoColor from "./autoColor.js";

import {
    installDirective
} from "../lib";

export {
    ReScreenSize,
    AutoColor,
    ScrollTo,
    Shadow,
    Focus
};

const directives = [ReScreenSize, AutoColor, ScrollTo, Shadow, Focus];

export default {
    install(Vue) {
        installDirective(Vue, directives);
    },
};
