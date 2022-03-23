import {
    rgbToHex
} from "../lib";

function reTextColor(el) {
    function getBgColor(el) {
        return window.getComputedStyle(el).backgroundColor;
    }
    if (rgbToHex(getBgColor(el)).max < 0.6) {
        el.style.color = "var(--text-light)";
    } else {
        el.style.color = "var(--text-dark)";
    }
}

function getTransitionDuration(el) {
    return parseFloat(window.getComputedStyle(el).transitionDuration);
}

export default {
    name: "auto-color",
    mounted(el) {
        reTextColor(el);
    },
    updated(el) {
        setTimeout(() => {
            reTextColor(el);
        }, getTransitionDuration(el) * 1000);
    },
};
